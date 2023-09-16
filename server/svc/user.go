package svc

import (
	"gorm.io/gorm"
)

// type User struct {
// 	gorm.Model
// 	ID    string `json:"user_id"`
// 	Email string `json:"email"`
// }

type User struct {
	gorm.Model
	ID        string `json:"user_id"`
	Email     string `json:"email"`
	Image     string `json:"image_url"`
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
}
