package svc

import (
	"context"
	"time"
)

type UserRepo interface {
	CreateUser(std *User)
	GetUserByID(userID string) (*User, error)
	GetUserByEmail(email string) (*User, error)
	ContactUs(email, subject, content string) (*Contact, error)
	Review(userID, name, role, review string) (*Review, error)
	Reviews() ([]*Review, error)
	Purchase(userID string) bool

	Get() []*User
}

type ProductRepo interface {
	GetProducts() []*Product
	GetProductByID(productID string) (*Product, error)
}

type PurchaseRepo interface {
	CreatePurchase(purchase *Purchase) error
	GetProductIDsByUserID(userID string) ([]string, error)
}

type Service interface {
	Error(ctx context.Context, internalCode string, description string) *ErrorResponse
	Response(ctx context.Context, description string, data interface{}) *ResponseData

	GetDashboardImages() []*Dashboard

	CreateUser(std *User)
	GetUserByID(userID string) (*User, error)
	GetUserByEmail(email string) (*User, error)
	UserContactUs(email, subject, content string) (*Contact, error)
	CreateReview(userID, name, role, review string) (*Review, error)
	GetReviews() ([]*Review, error)
	CheckPurchase(userID string) bool
	TotalDownloads() (int, error)

	GetProducts() []*Product
	CreatePurchase(userID string, productID string) error

	LoginAdmin(std *Admin) *Admin
	CreateAdmin(std *Admin) error
	FindAdminByUsername(username string) (*Admin, error)
	GetEmails(ID string) ([]*Contact, error)
	GetAllUsers() []*User
	GetProductIDsByUserID(userID string) ([]string, error)
}

type AdminRepo interface {
	Login(std *Admin) *Admin
	Create(std *Admin) error
	Find(username string) (*Admin, error)
	FindById(ID string) (*Admin, error)

	GetAllMails(ID string) ([]*Contact, error)
}

type DashboardRepo interface {
	Get() []*Dashboard
	Downloads() (int, error)
}

type ErrorRepo interface {
	GetError(ctx context.Context, internalCode string) (*ErrorDetail, error)
}

type Cache interface {
	Set(key string, value string, ttl time.Duration) error
	Get(key string) (string, error)
	Delete(key string) error
	GetTTL(key string) (time.Duration, error)
}
