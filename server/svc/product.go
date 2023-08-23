package svc

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Product struct {
	gorm.Model
    ProductID    uuid.UUID  `json:"product_id"`
    ProductName  string     `json:"product_name"`
    ProductDesc  string     `json:"product_description"`
    ProductPrice float64    `json:"product_price"`
    ProductTitle string     `json:"product_title"`
    Features     []Feature  `json:"features" gorm:"many2many:product_features;"`
}

