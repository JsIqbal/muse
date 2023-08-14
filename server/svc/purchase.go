package svc

import (
	"github.com/google/uuid"
)

type Purchase struct {
	ID         uuid.UUID `json:"id"`
	UserID     string    `json:"user_id"`
	ProductID  string    `json:"product_id"`
	ProductName string `json:"product_name"`
}