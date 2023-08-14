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

func (r *productRepo) GetProducts() []*svc.Product {
    var products []*svc.Product
    if err := r.db.Find(&products).Error; err != nil {
        // Handle the error, e.g., log it and return an empty slice
        return nil
    }
    return products
}

func (r *productRepo) GetProductByID(productID string) (*svc.Product, error) {
    var product svc.Product
    if err := r.db.Where("product_id = ?", productID).First(&product).Error; err != nil {
        // Handle the error, e.g., log it and return nil and the error
        return nil, err
    }
    return &product, nil
}
