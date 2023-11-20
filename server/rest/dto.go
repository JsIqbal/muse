package rest

type Product struct {
	ProductID    string  `json:"product_id"`
	ProductName  string  `json:"product_name"`
	ProductDesc  string  `json:"product_desc"`
	ProductPrice float64 `json:"product_price"`
}

type PurchaseRequest struct {
	UserID     string   `json:"user_id"`
	ProductIDs []string `json:"product_ids"`
}

type ContactUsRequest struct {
	Email   string `json:"email"`
	Subject string `json:"subject"`
	Content string `json:"content"`
}
type CreateReviewRequest struct {
	Name   string `json:"name"`
	Role   string `json:"role"`
	Review string `json:"review"`
}

// Define the SuccessResponse struct
type SuccessResponse struct {
	Message string `json:"message"`
}

// Define the ErrorResponse struct
type ErrorResponse struct {
	Message string `json:"message"`
}

// Define the eventData struct outside the controller
type EventData struct {
	Data struct {
		ID             string `json:"id" binding:"required"`
		EmailAddresses []struct {
			EmailAddress string `json:"email_address" binding:"required"`
		} `json:"email_addresses"`
		Image     string `json:"image_url" binding:"required"`
		FirstName string `json:"first_name" binding:"required"`
		LastName  string `json:"last_name" binding:"required"`
	} `json:"data"`
}

type userResponse struct {
	UserID string `json:"user_id"`
	Email  string `json:"email"`
}

type CreateAdminRequest struct {
	Username string `json:"username" binding:"required"`
	Password string `json:"password" binding:"required"`
}

type loginResponse struct {
	Token string `json:"token"`
}
