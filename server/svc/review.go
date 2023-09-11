package svc

import "gorm.io/gorm"

type Review struct {
	gorm.Model
	ID        string `json:"ID"`
	Name      string `json:"name"`
	Role      string `json:"role"`
	Review    string `json:"review"`
	CreatedAt int64  `json:"CreatedAt"`
}
