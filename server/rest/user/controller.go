package user

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"go-rest/svc"

	"fmt"
	"encoding/json"
)

func createUser(service svc.Service) gin.HandlerFunc {
	return func(ctx *gin.Context) {
		var eventData struct {
			Data struct {
				ID            string `json:"id"`
				EmailAddresses []struct {
					EmailAddress string `json:"email_address"`
				} `json:"email_addresses"`
			} `json:"data"`
			// You can add more fields here based on the request body
			// For example: birthday, created_at, etc.
		}

		body, err := ctx.GetRawData()
		if err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to read request body"})
			return
		}

		fmt.Printf("Request Body: %s", body)

		err = json.Unmarshal(body, &eventData)
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
		existingUser := service.GetUserByID(userID)
		if existingUser != nil {
			ctx.JSON(http.StatusConflict, gin.H{"error": "User with the same user ID already exists"})
			return
		}

		existingUserByEmail := service.GetUserByEmail(email)
		if existingUserByEmail != nil {
			ctx.JSON(http.StatusConflict, gin.H{"error": "User with the same email already exists"})
			return
		}

		// Create a new user
		user := &svc.User{
			ID:    userID,
			Email: email,
		}

		service.CreateUser(user)

		ctx.JSON(http.StatusOK, gin.H{"message": "User created successfully"})
	}
}



func getProducts(service svc.Service) gin.HandlerFunc {
	return func(ctx *gin.Context) {
		// Get all products from the service
		products := service.GetProducts()

		// Return the products as JSON response
		ctx.JSON(http.StatusOK, products)
	}
}