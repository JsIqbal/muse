package rest

import (
	"encoding/json"
	"fmt"
	"net/http"

	"go-rest/svc"

	"github.com/gin-gonic/gin"
)

// @Summary Create a new user
// @Description Create a new user with user ID and email address
// @Tags user
// @Accept json
// @Produce json
// @Param eventData body EventData true "Event data"
// @Success 200 {object} SuccessResponse
// @Failure 400 {object} ErrorResponse
// @Failure 401 {object} ErrorResponse
// @Failure 409 {object} ErrorResponse
// @Router /api/users/create [post]
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

// @Summary Get products
// @Description Get a list of all products
// @Tags user
// @Produce json
// @Success 200 {array} Product
// @Router /api/users/products [get]
func (s *Server) getProducts(ctx *gin.Context) {
	// Get all products from the service
	products := s.svc.GetProducts()

	// Return the products as JSON response
	ctx.JSON(http.StatusOK, products)
}

// @Summary Create a purchase
// @Description Create a purchase record for a user
// @Tags user
// @Accept json
// @Produce json
// @Param request body PurchaseRequest true "Purchase Request Body"
// @Success 200 {object} SuccessResponse
// @Failure 400 {object} ErrorResponse
// @Router /api/users/purchase [post]
// func (s *Server) purchase(ctx *gin.Context) {
// 	var request PurchaseRequest
// 	if err := ctx.ShouldBindJSON(&request); err != nil {
// 		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
// 		return
// 	}

// 	for _, productID := range request.ProductIDs {
// 		err := s.svc.CreatePurchase(request.UserID, productID)
// 		if err != nil {
// 			ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create purchase"})
// 			return
// 		}
// 	}

// 	ctx.JSON(http.StatusOK, gin.H{"message": "Purchases successfully created"})
// }

// func (s *Server) purchase(ctx *gin.Context) {
// 	// Retrieve metadata from the context
// 	metadata, exists := ctx.Get("metadata")
// 	if !exists {
// 		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Metadata not found in context"})
// 		return
// 	}

// 	// Check if metadata is a map
// 	metadataMap, ok := metadata.(map[string]interface{})
// 	if !ok {
// 		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid metadata format"})
// 		return
// 	}

// 	// Extract and convert the "line_items" value to JSON
// 	lineItems, lineItemsExists := metadataMap["line_items"]
// 	if !lineItemsExists {
// 		ctx.JSON(http.StatusBadRequest, gin.H{"error": "line_items not found in metadata"})
// 		return
// 	}

// 	lineItemsJSON, err := json.Marshal(lineItems)
// 	if err != nil {
// 		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to marshal line_items to JSON"})
// 		return
// 	}

// 	fmt.Println("------------------------metadata in rest", string(lineItemsJSON))

// 	var request PurchaseRequest
// 	if err := ctx.ShouldBindJSON(&request); err != nil {
// 		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
// 		return
// 	}

// 	for _, productID := range request.ProductIDs {
// 		err := s.svc.CreatePurchase(request.UserID, productID)
// 		if err != nil {
// 			ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create purchase"})
// 			return
// 		}
// 	}

// 	ctx.JSON(http.StatusOK, gin.H{"message": "Purchases successfully created"})
// }

func (s *Server) purchase(ctx *gin.Context) {
	// Retrieve metadata from the context
	metadata := ctx.MustGet("metadata")

	// Check if metadata is a map
	metadataMap, ok := metadata.(map[string]interface{})
	if !ok {
		fmt.Println("-------------------------------problem in metadataMap----------------", ok)
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid metadata format"})
		return
	}

	// Extract the PurchaseRequest JSON from metadata
	lineItems, lineItemsExists := metadataMap["line_items"]
	if !lineItemsExists {
		fmt.Println("-------------------------------problem in lineItemsExists----------------", lineItemsExists)
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "line_items not found in metadata"})
		return
	}

	// Check if lineItems is a string
	lineItemsStr, ok := lineItems.(string)
	if !ok {
		fmt.Println("-------------------------------problem in lineItemsStr----------------", ok)
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "line_items is not a valid JSON string"})
		return
	}

	// Log the content of lineItemsStr for debugging
	fmt.Println("-------------------------------lineItemsStr----------------", lineItemsStr)

	// Unmarshal lineItemsStr into a temporary PurchaseRequest
	var tempRequest PurchaseRequest
	if err := json.Unmarshal([]byte(lineItemsStr), &tempRequest); err != nil {
		fmt.Println("-------------------------------problem in tempRequest----------------", err)
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to unmarshal lineItemsStr"})
		return
	}

	fmt.Println("-------------------------------tempRequest----------------", tempRequest)

	// Bind the tempRequest with the request
	request := PurchaseRequest{
		UserID:     tempRequest.UserID,
		ProductIDs: tempRequest.ProductIDs,
	}

	// Ensure that the request body is still readable before calling ShouldBindJSON
	// if ctx.Request.Body == nil || ctx.Request.Body == http.NoBody {
	// 	ctx.JSON(http.StatusBadRequest, gin.H{"error": "Request body is empty or closed"})
	// 	return
	// }

	// if err := ctx.ShouldBindJSON(&request); err != nil {
	// 	fmt.Println("-------------------------------problem in ShouldBindJSON----------------", err)
	// 	ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
	// 	return
	// }

	for _, productID := range request.ProductIDs {
		err := s.svc.CreatePurchase(request.UserID, productID)
		if err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create purchase"})
			return
		}
	}

	ctx.JSON(http.StatusOK, gin.H{"message": "Purchases successfully created"})
}

// logout godoc
// @Summary Log out the admin
// @Description Log out the user by removing the token cookie from the browser
// @Tags admin
// @Accept json
// @Produce json
// @Success 200 {object} SuccessResponse
// @Router /api/users/logout [post]
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
