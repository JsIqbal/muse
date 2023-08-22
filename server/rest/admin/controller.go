package admin

import (
	"go-rest/svc"
	"net/http"

	"github.com/gin-gonic/gin"
)

func loginAdmin(service svc.Service) gin.HandlerFunc {
	return func(ctx *gin.Context) {
		var adminRequest CreateAdminRequest
		if err := ctx.ShouldBindJSON(&adminRequest); err != nil {
			ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		// Use the validated data
		admin := svc.Admin{
			Username: adminRequest.Username,
			Password: adminRequest.Password,
		}

		authenticatedAdmin := service.LoginAdmin(&admin)

		if authenticatedAdmin != nil {
			ctx.JSON(http.StatusOK, gin.H{"message": "Logged in successfully!"})
		} else {
			ctx.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid credentials"})
		}
	}
}

func createAdmin(service svc.Service) gin.HandlerFunc {
	return func(ctx *gin.Context) {
		var adminRequest CreateAdminRequest
		if err := ctx.ShouldBindJSON(&adminRequest); err != nil {
			ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		// Check if admin with the same username exists
		existingAdmin := service.FindAdminByUsername(adminRequest.Username) // Pass the username string
		if existingAdmin != nil {
			ctx.JSON(http.StatusBadRequest, gin.H{"error": "Admin with the same username already exists"})
			return
		}

		admin := svc.Admin{
			Username: adminRequest.Username,
			Password: adminRequest.Password,
		}

		service.CreateAdmin(&admin)

		ctx.JSON(http.StatusOK, gin.H{"message": "Admin created successfully"})
	}

}

func users(service svc.Service) gin.HandlerFunc {
	return func(ctx *gin.Context) {
		// Get all users from the service
		allUsers := service.GetAllUsers()

		// Create a slice to hold the custom response data
		var response []userResponse

		// Populate the response slice with user data
		for _, user := range allUsers {
			response = append(response, userResponse{
				UserID: user.ID,
				Email:  user.Email,
			})
		}

		// Return the custom response as JSON
		ctx.JSON(http.StatusOK, response)
	}
}
