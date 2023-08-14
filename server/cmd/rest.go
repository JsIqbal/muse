package cmd

import (
	"fmt"
	"go-rest/config"
	"go-rest/database"
	"go-rest/repo"
	"go-rest/rest"
	"go-rest/svc"
	"github.com/google/uuid"
	"gorm.io/gorm"
)

func serveRest() {
	appConfig := config.GetApp()
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local", appConfig.DBUser, appConfig.DBPass, appConfig.DBHost, appConfig.DBPort, appConfig.DBName)
	db := database.NewDatabase(dsn)
	userRepo := repo.NewUserRepo(db)
	dashRepo := repo.NewDashboardRepo(db)
	admnRepo := repo.NewAdminRepo(db)
	prodRepo := repo.NewProductRepo(db)
	purchaseRepo := repo.NewPurchaseRepo(db)
	svc := svc.NewService(dashRepo, userRepo, admnRepo, prodRepo, purchaseRepo)

	createDefaultProducts(db)

	server, err := rest.NewServer(svc, appConfig)

	if err != nil {
		panic(err)
	}

	err = server.Start()
	if err != nil {
		panic(err)
	}
}

func createDefaultProducts(db *gorm.DB) {
	defaultProducts := []svc.Product{
		{
			ProductID:          uuid.New(),
			ProductName:        "Muse",
			ProductDesc: "This is the Muse product",
			ProductPrice:       20,
		},
		{
			ProductID:          uuid.New(),
			ProductName:        "Jetpack",
			ProductDesc: "This is the Jetpack product",
			ProductPrice:       20,
		},
	}

	for _, p := range defaultProducts {
		db.Create(&p)
	}
}
