package admin

// Define the custom response structure for user data
type userResponse struct {
	UserID string `json:"user_id"`
	Email  string `json:"email"`
}

type CreateAdminRequest struct {
	Username string `json:"username" binding:"required"`
	Password string `json:"password" binding:"required"`
}
