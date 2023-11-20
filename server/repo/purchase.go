package repo

import (
	"fmt"
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

// func (r *purchaseRepo) CreatePurchase(purchase *svc.Purchase) error {
// 	fmt.Println("-----------------------came here --------------------")
// 	if err := r.db.Create(purchase).Error; err != nil {
// 		return err
// 	}
// 	return nil
// }

func (r *purchaseRepo) CreatePurchase(purchase *svc.Purchase) error {
	fmt.Println("-----------------------came here --------------------")

	// Check if there are existing purchase records with the same product ID for the user
	var existingPurchases []svc.Purchase
	if err := r.db.Where("user_id = ? AND product_id = ?", purchase.UserID, purchase.ProductID).Find(&existingPurchases).Error; err != nil {
		return err
	}

	// Delete existing records with the same product ID
	for _, existingPurchase := range existingPurchases {
		if err := r.db.Delete(&existingPurchase).Error; err != nil {
			return err
		}
	}

	// Create a new purchase record
	if err := r.db.Create(purchase).Error; err != nil {
		return err
	}

	return nil
}

func (s *purchaseRepo) GetProductIDsByUserID(userID string) ([]string, error) {
	// Define a slice to store the retrieved product IDs
	var productIDs []string

	// Assuming you have a database connection available as s.db
	// You may need to adapt this part to your specific database library

	// Use your database query to retrieve the product IDs associated with the userID
	// For example, using GORM:
	if err := s.db.Table("purchases").Where("user_id = ?", userID).Pluck("product_id", &productIDs).Error; err != nil {
		// Handle the error if the query fails
		return nil, err
	}

	return productIDs, nil
}
