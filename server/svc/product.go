package svc

import (
    "github.com/google/uuid"
)

type Product struct {
    ProductID       uuid.UUID `json:"product_id"`
    ProductName     string    `json:"product_name"`
    ProductDesc     string    `json:"product_description"`
    ProductPrice    float64   `json:"product_price"`
}
