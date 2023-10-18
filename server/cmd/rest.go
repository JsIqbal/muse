package cmd

import (
	"fmt"
	"go-rest/cache"
	"go-rest/config"
	"go-rest/database"
	"go-rest/repo"
	"go-rest/rest"
	"go-rest/svc"
	"log"
	"time"

	"github.com/go-redis/redis"
	"github.com/google/uuid"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

func serveRest() {
	appConfig := config.GetApp()
	saltConfig := config.GetSalt()
	tokenConfig := config.GetToken()

	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local", appConfig.DBUser, appConfig.DBPass, appConfig.DBHost, appConfig.DBPort, appConfig.DBName)
	// dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local", "root", "123456", "db", "3306", "muse")

	db := database.NewDatabase(dsn)
	userRepo := repo.NewUserRepo(db)
	dashRepo := repo.NewDashboardRepo(db)
	admnRepo := repo.NewAdminRepo(db)
	prodRepo := repo.NewProductRepo(db)
	purchaseRepo := repo.NewPurchaseRepo(db)
	errorRepo := repo.NewErrorRepo(db)

	redisClient := redis.NewClient(&redis.Options{
		Addr: "localhost:6379",
	})
	cache := cache.NewCache(redisClient)
	svc := svc.NewService(dashRepo, userRepo, admnRepo, prodRepo, purchaseRepo, errorRepo, cache)

	createDefaultProducts(db)
	createDefaultAdmin(db)

	server, err := rest.NewServer(svc, appConfig, saltConfig, tokenConfig)

	if err != nil {
		panic(err)
	}

	err = server.Start()
	if err != nil {
		panic(err)
	}
}

func createDefaultProducts(db *gorm.DB) {
	db.Exec("DELETE FROM product_features")
	db.Exec("DELETE FROM features")
	db.Exec("DELETE FROM products")

	feature1 := svc.Feature{
		FeatureID:   uuid.New(),
		FeatureName: "Simplify, Aggregate, Automate:",
		FeatureDesc: "Manage Linux, WebSphere, WebLogic, JBoss, Glassfish, Tomcat through JMX and Linux SSH without agents.",
	}

	feature2 := svc.Feature{
		FeatureID:   uuid.New(),
		FeatureName: "Sample Scripts Included:",
		FeatureDesc: "Access GIT Repository, apply SSL Configuration in clicks. Performance Tune Pega (JBoss), Upgrade Vendor Apps, Build WebLogic Domains quickly.",
	}

	product1 := svc.Product{
		ProductID:    "prod_OQqVfPPkSOgzHj",
		ProductName:  "Muse",
		ProductDesc:  "Muse empowers you to automate WebSphere, WebLogic, JBoss, Glassfish, and Tomcat Middleware Estates over JMX using Python / Jython. With its user-friendly Eclipse-based Jython Development IDE, you can streamline your workflow and simplify server management.",
		ProductPrice: 19.99,
		ProductTitle: "Muse: Middleware Universal Scripting idE:",
	}

	product2 := svc.Product{
		ProductID:    "prod_OQqfX0s5HDDSZI",
		ProductName:  "JETPack",
		ProductDesc:  "JET Pack offers essential tools for Java developers, encompassing OpenSource JDKs from Java 13 to 19. It includes Visual VM, JConsole, and MissionControl, providing powerful diagnostic capabilities to profile and optimize your code.",
		ProductPrice: 20.99,
		ProductTitle: "JETPack - Empowering Java Development and Diagnostics:",
	}

	feature3 := svc.Feature{
		FeatureID:   uuid.New(),
		FeatureName: "OpenSource Java JDK Support:",
		FeatureDesc: "JETPack integrates with Java JDKs 13-19, empowering developers to leverage open-source Java advancements.",
	}

	feature4 := svc.Feature{
		FeatureID:   uuid.New(),
		FeatureName: "Efficient Diagnostics:",
		FeatureDesc: "Tools like Visual VM, JConsole, and MissionControl offer real-time insights into memory usage, CPU performance, and smarter decision-making.",
	}

	feature5 := svc.Feature{
		FeatureID:   uuid.New(),
		FeatureName: "Precise Performance Boost:",
		FeatureDesc: "Diagnose memory leaks, manage heap dumps, and profile CPU and memory usage with precision. Enhance efficiency and application behavior over time.",
	}

	product1.Features = []svc.Feature{feature1, feature2}
	product2.Features = []svc.Feature{feature3, feature4, feature5}

	db.Create(&product1)
	db.Create(&product2)
}

func createDefaultAdmin(db *gorm.DB) {
	db.Exec("DELETE FROM admins")
	// Hash password
	hashedPass, err := bcrypt.GenerateFromPassword([]byte("P@ssword"), config.GetSalt().SecretKey)
	if err != nil {
		log.Printf("Error hashing password: %v", err)
		return
	}

	// Create admin in the database
	admin := svc.Admin{
		Username:  "admin",
		Password:  string(hashedPass),
		CreatedAt: time.Now().Unix(),
	}

	if err := db.Create(&admin).Error; err != nil {
		log.Printf("Error creating default admin: %v", err)
		return
	}

	log.Println("Default admin created successfully")
}
