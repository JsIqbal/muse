package svc

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
)


type ProductFeature struct {
	gorm.Model
    ProductID uuid.UUID `json:"product_id"`
    FeatureID uuid.UUID `json:"feature_id"`
}
