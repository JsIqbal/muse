package rest

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"path/filepath"

	"go-rest/svc"

	"github.com/gin-gonic/gin"
)

func (s *Server) createUser(ctx *gin.Context) {
	var eventData EventData

	err := ctx.BindJSON(&eventData)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid JSON data"})
		return
	}

	userID := eventData.Data.ID
	email := ""
	if len(eventData.Data.EmailAddresses) > 0 {
		email = eventData.Data.EmailAddresses[0].EmailAddress
	}

	if userID == "" || email == "" {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid user ID or email"})
		return
	}

	// Check if the user ID or email already exists
	existingUser, err := s.svc.GetUserByID(userID)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Internal server error"})
		return
	}

	if existingUser != nil {
		ctx.JSON(http.StatusConflict, gin.H{"error": "User with the same user ID already exists"})
		return
	}

	existingUserByEmail, err := s.svc.GetUserByEmail(email)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Internal server error"})
		return
	}

	if existingUserByEmail != nil {
		ctx.JSON(http.StatusConflict, gin.H{"error": "User with the same email already exists"})
		return
	}

	// Create a new user
	user := &svc.User{
		ID:        userID,
		Email:     email,
		Image:     eventData.Data.Image,
		FirstName: eventData.Data.FirstName,
		LastName:  eventData.Data.LastName,
	}

	s.svc.CreateUser(user)

	ctx.JSON(http.StatusOK, gin.H{"message": "User created successfully"})
}

func (s *Server) getProducts(ctx *gin.Context) {
	// Get all products from the service
	products := s.svc.GetProducts()

	// Return the products as JSON response
	ctx.JSON(http.StatusOK, products)
}

func (s *Server) purchase(ctx *gin.Context) {
	// Retrieve metadata from the context
	metadata := ctx.MustGet("metadata")

	// Check if metadata is a map
	metadataMap, ok := metadata.(map[string]interface{})
	if !ok {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid metadata format"})
		return
	}

	// Extract the PurchaseRequest JSON from metadata
	lineItems, lineItemsExists := metadataMap["line_items"]
	if !lineItemsExists {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "line_items not found in metadata"})
		return
	}

	// Check if lineItems is a string
	lineItemsStr, ok := lineItems.(string)
	if !ok {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "line_items is not a valid JSON string"})
		return
	}

	// Log the content of lineItemsStr for debugging

	// Unmarshal lineItemsStr into a temporary PurchaseRequest
	var tempRequest PurchaseRequest
	if err := json.Unmarshal([]byte(lineItemsStr), &tempRequest); err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to unmarshal lineItemsStr"})
		return
	}

	request := PurchaseRequest{
		UserID:     tempRequest.UserID,
		ProductIDs: tempRequest.ProductIDs,
	}

	for _, productID := range request.ProductIDs {
		err := s.svc.CreatePurchase(request.UserID, productID)
		if err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create purchase"})
			return
		}
	}

	ctx.JSON(http.StatusOK, gin.H{"message": "Purchases successfully created"})
}

// func (s *Server) purchase(ctx *gin.Context) {
// 	// Retrieve metadata from the context
// 	metadata := ctx.MustGet("metadata")

// 	// Check if metadata is a map
// 	metadataMap, ok := metadata.(map[string]interface{})
// 	if !ok {
// 		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid metadata format"})
// 		return
// 	}

// 	// Extract the PurchaseRequest JSON from metadata
// 	lineItems, lineItemsExists := metadataMap["line_items"]
// 	if !lineItemsExists {
// 		ctx.JSON(http.StatusBadRequest, gin.H{"error": "line_items not found in metadata"})
// 		return
// 	}

// 	// Check if lineItems is a string
// 	lineItemsStr, ok := lineItems.(string)
// 	if !ok {
// 		ctx.JSON(http.StatusBadRequest, gin.H{"error": "line_items is not a valid JSON string"})
// 		return
// 	}

// 	// Unmarshal lineItemsStr into a temporary PurchaseRequest
// 	var tempRequest PurchaseRequest
// 	if err := json.Unmarshal([]byte(lineItemsStr), &tempRequest); err != nil {
// 		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to unmarshal lineItemsStr"})
// 		return
// 	}

// 	request := PurchaseRequest{
// 		UserID:     tempRequest.UserID,
// 		ProductIDs: tempRequest.ProductIDs,
// 	}

// 	// Pass the ProductIDs to the next middleware
// 	ctx.Set("productIDs", request.ProductIDs)

// 	// Call the next middleware
// 	ctx.Next()
// }

// func (s *Server) getFiles(ctx *gin.Context) {
// 	// Retrieve the product IDs from the context
// 	productIDs, _ := ctx.Get("productIDs")

// 	fmt.Println("productIDs--------------", productIDs)
// 	// Send the list of file names and associated product IDs as a response
// }

// func (s *Server) getFiles(ctx *gin.Context) {
// 	// Retrieve the product IDs from the context
// 	productIDs, _ := ctx.Get("productIDs")
// 	fmt.Printf("productIDs: Type: %T, Value: %v\n", productIDs, productIDs)

// 	// Convert product IDs to strings (if needed)
// 	productIDStrings := []string{}
// 	if productIDs != nil {
// 		if ids, ok := productIDs.([]string); ok {
// 			productIDStrings = ids
// 		}
// 	}

// 	// Check if there are product IDs
// 	if len(productIDStrings) == 0 {
// 		ctx.JSON(http.StatusBadRequest, gin.H{"error": "No product IDs found"})
// 		fmt.Println("Problem in len", productIDStrings)
// 		return
// 	}

// 	// Construct the directory path for the uploaded files
// 	cwd, err := os.Getwd()
// 	if err != nil {
// 		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to get current working directory"})
// 		fmt.Println("Problem in cwd", cwd)
// 		return
// 	}

// 	uploadDir := filepath.Join(cwd, "uploads")

// 	// Iterate through the product IDs and search for corresponding zip files
// 	for _, productID := range productIDStrings {
// 		filename := fmt.Sprintf("%s.zip", productID)
// 		filepath := filepath.Join(uploadDir, filename)

// 		// Check if the file exists
// 		if _, err := os.Stat(filepath); err == nil {
// 			// File found, print a message
// 			fmt.Printf("Found ZIP file for product ID %s at path %s\n", productID, filepath)
// 		} else {
// 			fmt.Printf("ZIP file for product ID %s not found at path %s\n", productID, filepath)
// 		}
// 	}

// 	// Send the list of file names and associated product IDs as a response
// 	// You can add logic here to send the files to the client if needed
// }

// func (s *Server) getFiles(ctx *gin.Context) {
// 	// Retrieve the product IDs from the context
// 	productIDs, _ := ctx.Get("productIDs")

// 	// Convert product IDs to strings (if needed)
// 	productIDStrings := []string{}
// 	if productIDs != nil {
// 		if ids, ok := productIDs.([]string); ok {
// 			productIDStrings = ids
// 		}
// 	}

// 	// Check if there are product IDs
// 	if len(productIDStrings) == 0 {
// 		ctx.JSON(http.StatusBadRequest, gin.H{"error": "No product IDs found"})
// 		return
// 	}

// 	// Construct the directory path for the uploaded files
// 	cwd, err := os.Getwd()
// 	if err != nil {
// 		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to get current working directory"})
// 		return
// 	}

// 	uploadDir := filepath.Join(cwd, "uploads")

// 	// Serve the ZIP files to the client
// 	for _, productID := range productIDStrings {
// 		filename := fmt.Sprintf("%s.zip", productID)
// 		filepath := filepath.Join(uploadDir, filename)

// 		// Check if the file exists
// 		if _, err := os.Stat(filepath); err == nil {
// 			// Set response headers for file download
// 			ctx.Header("Content-Disposition", fmt.Sprintf("attachment; filename=\"%s\"", filename))
// 			ctx.Header("Content-Type", "application/zip")
// 			ctx.File(filepath)
// 			return
// 		}
// 	}

// 	// If no file is found, return an error
// 	ctx.JSON(http.StatusNotFound, gin.H{"error": "ZIP file not found"})
// }

// func (s *Server) getFiles(ctx *gin.Context) {
// 	// Retrieve the user ID from the route parameters
// 	userID := ctx.Param("id")

// 	// Call the Purchase method to check if the user exists in the purchase table
// 	exists := s.svc.CheckPurchase(userID)

// 	// Check if the user exists
// 	if !exists {
// 		ctx.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
// 		return
// 	}

// 	// Retrieve the product IDs from the request body
// 	var request struct {
// 		ProductIDs []string `json:"product_ids"`
// 	}

// 	if err := ctx.ShouldBindJSON(&request); err != nil {
// 		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Failed to parse request body"})
// 		return
// 	}

// 	// Convert product IDs to strings (if needed)
// 	productIDStrings := request.ProductIDs

// 	// Check if there are product IDs
// 	if len(productIDStrings) == 0 {
// 		ctx.JSON(http.StatusBadRequest, gin.H{"error": "No product IDs found"})
// 		return
// 	}

// 	// Construct the directory path for the uploaded files
// 	cwd, err := os.Getwd()
// 	if err != nil {
// 		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to get current working directory"})
// 		return
// 	}

// 	uploadDir := filepath.Join(cwd, "uploads")

// 	// Serve the ZIP files to the client
// 	for _, productID := range productIDStrings {
// 		filename := fmt.Sprintf("%s.zip", productID)
// 		filepath := filepath.Join(uploadDir, filename)

// 		// Check if the file exists
// 		if _, err := os.Stat(filepath); err == nil {
// 			// Serve the file to the client
// 			ctx.File(filepath)
// 			return
// 		}
// 	}

// 	// If no file is found, return an error
// 	ctx.JSON(http.StatusNotFound, gin.H{"error": "ZIP file not found"})
// }

func (s *Server) getFiles(ctx *gin.Context) {
	// Retrieve the user ID from the route parameters
	userID := ctx.Param("id")

	// Call the Purchase method to check if the user exists in the purchase table
	exists := s.svc.CheckPurchase(userID)

	// Check if the user exists
	if !exists {
		ctx.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}

	// Retrieve the product IDs from the purchase table for the user
	productIDs, err := s.svc.GetProductIDsByUserID(userID)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to retrieve product IDs"})
		return
	}

	// Check if there are product IDs
	if len(productIDs) == 0 {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "No product IDs found"})
		return
	}

	// Construct the directory path for the uploaded files
	cwd, err := os.Getwd()
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to get current working directory"})
		return
	}

	uploadDir := filepath.Join(cwd, "uploads")

	// Serve the ZIP files to the client
	for _, productID := range productIDs {
		filename := fmt.Sprintf("%s.zip", productID)
		filepath := filepath.Join(uploadDir, filename)

		// Check if the file exists
		if _, err := os.Stat(filepath); err == nil {
			// Serve the file to the client
			ctx.File(filepath)
			return
		}
	}

	// If no file is found, return an error
	ctx.JSON(http.StatusNotFound, gin.H{"error": "ZIP file not found"})
}

func (s *Server) logout(ctx *gin.Context) {
	ctx.SetCookie("token", "", -1, "/", "", false, true)
	ctx.JSON(http.StatusOK, gin.H{"message": "Logged out successfully"})
}

func (s *Server) contactUs(ctx *gin.Context) {
	// Parse the request body to get the contact details
	var req ContactUsRequest
	if err := ctx.ShouldBindJSON(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Call the service method to send the contact email
	contact, err := s.svc.UserContactUs(req.Email, req.Subject, req.Content)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	// Respond with a success message
	ctx.JSON(http.StatusOK, gin.H{"message": "Email sent successfully", "contact": contact})
}

func (s *Server) getAllMails(ctx *gin.Context) {
	// Get the user's authentication payload from the context
	authPayload := ctx.MustGet(authorizationPayloadKey).(Payload)
	emails, err := s.svc.GetEmails(authPayload.ID)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"emails": emails})
}

func (s *Server) reviews(ctx *gin.Context) {
	// Call the service method to get all reviews
	reviews, err := s.svc.GetReviews()
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	// Respond with the list of reviews
	ctx.JSON(http.StatusOK, gin.H{"reviews": reviews})
}

func (s *Server) downloads(ctx *gin.Context) {
	// Call the service method to get the total number of downloads
	totalDownloads, err := s.svc.TotalDownloads()
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	// Respond with the total number of downloads
	ctx.JSON(http.StatusOK, gin.H{"totalDownloads": totalDownloads})
}

func (s *Server) checkPurchase(ctx *gin.Context) {
	userID := ctx.Param("id")

	// Call the Purchase method to check if the user exists in the purchase table
	exists := s.svc.CheckPurchase(userID)

	// Respond based on whether the user exists in the purchase table
	if exists {
		ctx.JSON(http.StatusOK, gin.H{"message": "User exists in the purchase table"})
	} else {
		ctx.JSON(http.StatusNotFound, gin.H{"message": "User does not exist in the purchase table"})
	}
}

func (s *Server) createReview(ctx *gin.Context) {
	// Get the user ID from the route parameter
	userID := ctx.Param("id")

	// Parse the request body to get review details
	var req CreateReviewRequest
	if err := ctx.BindJSON(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Call the service method to create a review
	review, err := s.svc.CreateReview(userID, req.Name, req.Role, req.Review)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	// Respond with the created review
	ctx.JSON(http.StatusOK, gin.H{"review": review})
}

func (s *Server) editReview(ctx *gin.Context) {
	// Get the user ID from the route parameter
	userID := ctx.Param("id")

	// Parse the request body to get review details
	var req CreateReviewRequest
	if err := ctx.BindJSON(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Call the service method to create a review
	review, err := s.svc.EditReview(userID, req.Name, req.Role, req.Review)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	// Respond with the created review
	ctx.JSON(http.StatusOK, gin.H{"review": review})
}
