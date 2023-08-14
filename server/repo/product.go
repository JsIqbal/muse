package repo

import (
	"go-rest/svc"
	"gorm.io/gorm"
)

type productRepo struct {
	db *gorm.DB
}

func NewProductRepo(db *gorm.DB) svc.ProductRepo {
	return &productRepo{
		db: db,
	}
}