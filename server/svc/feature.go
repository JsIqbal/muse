package svc

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
)


type Feature struct {
	gorm.Model
    FeatureID   uuid.UUID `json:"feature_id"`
    FeatureName string    `json:"feature_name"`
    FeatureDesc string    `json:"feature_description"`
}