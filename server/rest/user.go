package rest

import (
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
		ID:    userID,
		Email: email,
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
func (s *Server) purchase(ctx *gin.Context) {
	var request PurchaseRequest
	if err := ctx.ShouldBindJSON(&request); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
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
