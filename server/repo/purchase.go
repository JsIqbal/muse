package repo

import (
	"go-rest/svc"
	"gorm.io/gorm"
)

type purchaseRepo struct {
	db *gorm.DB
}

func NewPurchaseRepo(db *gorm.DB) svc.PurchaseRepo {
	return &purchaseRepo{
		db: db,
	}
}


func (r *purchaseRepo) CreatePurchase(purchase *svc.Purchase) error {
	if err := r.db.Create(purchase).Error; err != nil {
		return err
	}
	return nil
}