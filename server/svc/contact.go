package svc

import "gorm.io/gorm"

type Contact struct {
	gorm.Model
	ID        string `json:"ID"`
	Email     string `json:"email"`
	Subject   string `json:"subject"`
	Content   string `json:"content"`
	CreatedAt int64  `json:"CreatedAt"`
}
