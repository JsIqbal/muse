package database

import (
	"go-rest/svc"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func NewDatabase(dsn string) *gorm.DB {

	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic(err)
	}

	db.AutoMigrate(&svc.Dashboard{}, &svc.User{}, &svc.Admin{}, &svc.Purchase{}, &svc.Contact{}, &svc.Review{}, &svc.ErrorModel{}, &svc.Product{}, &svc.Feature{}, &svc.ProductFeature{})

	return db
}
