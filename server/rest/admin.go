package rest

import (
	"errors"
	"fmt"
	"go-rest/config"
	"go-rest/logger"
	"go-rest/svc"
	"go-rest/util"
	"io"
	"net/http"
	"os"
	"path/filepath"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

func (s *Server) loginAdmin(ctx *gin.Context) {

	var req CreateAdminRequest
	err := ctx.ShouldBindJSON(&req)
	if err != nil {
		logger.Error(ctx, "cannot pass validation", err)
		ctx.JSON(http.StatusBadRequest, s.svc.Error(ctx, util.EN_API_PARAMETER_INVALID_ERROR, "Bad request"))
		return
	}

	logger.Info(ctx, "failed", req)

	user, err := s.svc.FindAdminByUsername(req.Username)
	if err != nil {
		logger.Error(ctx, "cannot get user", err)
		ctx.JSON(http.StatusInternalServerError, s.svc.Error(ctx, util.EN_INTERNAL_SERVER_ERROR, "Internal server error"))
		return
	}

	if user == nil {
		logger.Error(ctx, "user not found", err)
		ctx.JSON(http.StatusNotFound, s.svc.Error(ctx, util.EN_NOT_FOUND, "Not Found"))
		return
	}

	err = bcrypt.CompareHashAndPassword([]byte(user.Password), ([]byte(req.Password)))
	if err != nil {
		logger.Error(ctx, "cannot decrypt the password", err)
		ctx.JSON(http.StatusInternalServerError, s.svc.Error(ctx, util.EN_INTERNAL_SERVER_ERROR, "Internal server error"))
		return
	}

	token, err := GenerateToken(user.ID, &config.Token{JWToken: s.jwt.JWToken})
	if err != nil {
		logger.Error(ctx, "failed to generate token", err)
		ctx.JSON(http.StatusInternalServerError, s.svc.Error(ctx, util.EN_INTERNAL_SERVER_ERROR, "Internal server error"))
		return
	}

	loginRes := loginResponse{
		Token: token,
	}

	ctx.SetCookie("token", token, 3600, "/", "", false, true)
	ctx.JSON(http.StatusOK, s.svc.Response(ctx, "successfully logged in", loginRes))

}

func (s *Server) createAdmin(ctx *gin.Context) {
	var adminRequest CreateAdminRequest
	if err := ctx.ShouldBindJSON(&adminRequest); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Check if admin already exists
	existingAdmin, err := s.svc.FindAdminByUsername(adminRequest.Username)
	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			// Admin not found, continue
		} else {
			ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Internal server error"})
			return
		}
	}

	if existingAdmin != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Admin with the same username already exists"})
		return
	}

	// Hash password
	hashedPass, err := bcrypt.GenerateFromPassword([]byte(adminRequest.Password), s.salt.SecretKey)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Could not hash password"})
		return
	}

	// Create admin in database
	adminID, err := uuid.NewUUID()
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Internal server error"})
		return
	}

	admin := svc.Admin{
		ID:        adminID.String(),
		Username:  adminRequest.Username,
		Password:  string(hashedPass),
		CreatedAt: util.GetCurrentTimestamp(),
	}

	err = s.svc.CreateAdmin(&admin)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Internal server error"})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"message": "Admin created successfully"})
}

func (s *Server) users(ctx *gin.Context) {
	allUsers := s.svc.GetAllUsers()

	var response []userResponse

	for _, user := range allUsers {
		response = append(response, userResponse{
			UserID: user.ID,
			Email:  user.Email,
		})
	}

	ctx.JSON(http.StatusOK, response)
}

// func (s *Server) uploadZipFile(ctx *gin.Context) {
// 	productID := ctx.Param("id")

// 	cwd, err := os.Getwd()
// 	if err != nil {
// 		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to get current working directory"})
// 		return
// 	}

// 	uploadDir := filepath.Join(cwd, "uploads")

// 	err = os.MkdirAll(uploadDir, os.ModePerm)
// 	if err != nil {
// 		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create upload directory"})
// 		return
// 	}

// 	err = ctx.Request.ParseMultipartForm(10 << 20)
// 	if err != nil {
// 		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Unable to parse form"})
// 		return
// 	}

// 	file, _, err := ctx.Request.FormFile("zip_file")
// 	if err != nil {
// 		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Unable to retrieve file"})
// 		return
// 	}
// 	defer file.Close()

// 	filename := fmt.Sprintf("%s.zip", productID)

// 	filepath := filepath.Join(uploadDir, filename)

// 	// Check if the file already exists
// 	if _, err := os.Stat(filepath); err == nil {
// 		// File already exists, handle the error as needed
// 		ctx.JSON(http.StatusBadRequest, gin.H{"error": "File already exists"})
// 		return
// 	}

// 	out, err := os.Create(filepath)
// 	if err != nil {
// 		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create file on server"})
// 		return
// 	}
// 	defer out.Close()

// 	_, err = io.Copy(out, file)
// 	if err != nil {
// 		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to save file on server"})
// 		return
// 	}

// 	// You can save the filepath to a database or use it as needed
// 	// For example, you can associate it with the product ID in your database

// 	ctx.JSON(http.StatusOK, gin.H{"message": "File uploaded successfully"})
// }

// func (s *Server) uploadZipFile(ctx *gin.Context) {
// 	// Set the maximum request size for file uploads to 1 GB (1048576 KB)
// 	ctx.Request.Body = http.MaxBytesReader(ctx.Writer, ctx.Request.Body, 1048576*1024)

// 	productID := ctx.Param("id")

// 	cwd, err := os.Getwd()
// 	if err != nil {
// 		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to get current working directory"})
// 		return
// 	}

// 	uploadDir := filepath.Join(cwd, "uploads")

// 	err = os.MkdirAll(uploadDir, os.ModePerm)
// 	if err != nil {
// 		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create upload directory"})
// 		return
// 	}

// 	err = ctx.Request.ParseMultipartForm(10 << 20) // You can increase this value if needed
// 	if err != nil {
// 		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Unable to parse form"})
// 		return
// 	}

// 	file, _, err := ctx.Request.FormFile("zip_file")
// 	if err != nil {
// 		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Unable to retrieve file"})
// 		return
// 	}
// 	defer file.Close()

// 	filename := fmt.Sprintf("%s.zip", productID)

// 	filepath := filepath.Join(uploadDir, filename)

// 	// Check if the file already exists
// 	if _, err := os.Stat(filepath); err == nil {
// 		// File already exists, handle the error as needed
// 		ctx.JSON(http.StatusBadRequest, gin.H{"error": "File already exists"})
// 		return
// 	}

// 	out, err := os.Create(filepath)
// 	if err != nil {
// 		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create file on server"})
// 		return
// 	}
// 	defer out.Close()

// 	_, err = io.Copy(out, file)
// 	if err != nil {
// 		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to save file on server"})
// 		return
// 	}

// 	// You can save the filepath to a database or use it as needed
// 	// For example, you can associate it with the product ID in your database

// 	ctx.JSON(http.StatusOK, gin.H{"message": "File uploaded successfully"})
// }

func (s *Server) uploadZipFile(ctx *gin.Context) {
	// Set the maximum request size for file uploads to 1 GB (1048576 KB)
	ctx.Request.Body = http.MaxBytesReader(ctx.Writer, ctx.Request.Body, 1048576*1024)

	productID := ctx.Param("id")

	cwd, err := os.Getwd()
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to get current working directory"})
		return
	}

	uploadDir := filepath.Join(cwd, "uploads")

	err = os.MkdirAll(uploadDir, os.ModePerm)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create upload directory"})
		return
	}

	err = ctx.Request.ParseMultipartForm(10 << 20) // You can increase this value if needed
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Unable to parse form"})
		return
	}

	file, _, err := ctx.Request.FormFile("zip_file")
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Unable to retrieve file"})
		return
	}
	defer file.Close()

	filename := fmt.Sprintf("%s.zip", productID)

	filepath := filepath.Join(uploadDir, filename)

	out, err := os.Create(filepath)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create or open file on server"})
		return
	}
	defer out.Close()

	_, err = io.Copy(out, file)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to save file on server"})
		return
	}

	// You can save the filepath to a database or use it as needed
	// For example, you can associate it with the product ID in your database

	ctx.JSON(http.StatusOK, gin.H{"message": "File uploaded successfully"})
}

func (s *Server) deleteFile(ctx *gin.Context) {
	// Retrieve the product ID from the route parameters
	productID := ctx.Param("id")

	// Construct the file path based on the product ID and the upload directory
	cwd, err := os.Getwd()
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to get current working directory"})
		return
	}

	uploadDir := filepath.Join(cwd, "uploads")
	filepath := filepath.Join(uploadDir, fmt.Sprintf("%s.zip", productID))

	// Check if the file exists
	if _, err := os.Stat(filepath); os.IsNotExist(err) {
		// File does not exist, return an error
		ctx.JSON(http.StatusNotFound, gin.H{"error": "File not found"})
		return
	}

	// Attempt to delete the file
	if err := os.Remove(filepath); err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete file"})
		return
	}

	// Handle successful deletion, e.g., update the database if needed
	ctx.JSON(http.StatusOK, gin.H{"message": "File deleted successfully"})
}

func (s *Server) updateFile(ctx *gin.Context) {
	// Retrieve the product ID from the route parameters
	productID := ctx.Param("id")

	// Construct the file path based on the product ID and the upload directory
	cwd, err := os.Getwd()
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to get current working directory"})
		return
	}

	uploadDir := filepath.Join(cwd, "uploads")
	filepath := filepath.Join(uploadDir, fmt.Sprintf("%s.zip", productID))

	// Check if the file exists
	if _, err := os.Stat(filepath); os.IsNotExist(err) {
		// File does not exist, return an error
		ctx.JSON(http.StatusNotFound, gin.H{"error": "File not found"})
		return
	}

	// Parse the form data including the updated file
	err = ctx.Request.ParseMultipartForm(10 << 20) // 10 MB limit for the file size
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Unable to parse form"})
		return
	}

	// Retrieve the updated file
	file, _, err := ctx.Request.FormFile("zip_file")
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Unable to retrieve updated file"})
		return
	}
	defer file.Close()

	// Create or open the file for writing
	outFile, err := os.Create(filepath)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create or open file for writing"})
		return
	}
	defer outFile.Close()

	// Copy the updated file content to the existing file
	_, err = io.Copy(outFile, file)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to save updated file content"})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"message": "File updated successfully"})
}
