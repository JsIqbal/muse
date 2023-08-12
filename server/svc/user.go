package svc

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Email  string `json:"username"`
}
