package cmd

import (
	"fmt"
	"go-rest/config"
	"go-rest/database"
	"go-rest/repo"
	"go-rest/rest"
	"go-rest/svc"
)

func serveRest() {
	appConfig := config.GetApp()
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local", appConfig.DBUser, appConfig.DBPass, appConfig.DBHost, appConfig.DBPort, appConfig.DBName)
	db := database.NewDatabase(dsn)
	userRepo := repo.NewUserRepo(db)
	dashRepo := repo.NewDashboardRepo(db)
	admnRepo := repo.NewAdminRepo(db)
	svc := svc.NewService(dashRepo, userRepo, admnRepo)

	server, err := rest.NewServer(svc, appConfig)

	if err != nil {
		panic(err)
	}

	err = server.Start()

	if err != nil {
		panic(err)
	}
}
