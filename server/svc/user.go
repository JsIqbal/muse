// package svc

// import "gorm.io/gorm"

// type User struct {
// 	gorm.Model
// 	Email  string `json:"username"`
// }

package svc

import (
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	ID    string `json:"user_id"`
	Email string `json:"email"`
}
