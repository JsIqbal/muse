package rest

import (
	"fmt"
	"go-rest/config"
	"go-rest/logger"
	"go-rest/svc"

	"github.com/gin-gonic/gin"
)

type Server struct {
	router    *gin.Engine
	svc       svc.Service
	appConfig *config.Application
	jwt       *config.Token
	salt      *config.Salt
}

func NewServer(svc svc.Service, appConfig *config.Application, salt *config.Salt, jwt *config.Token) (*Server, error) {
	server := &Server{
		svc:       svc,
		appConfig: appConfig,
		salt:      salt,
		jwt:       jwt,
	}

	server.setupRouter()

	return server, nil
}

func (s *Server) setupRouter() {
	s.router = gin.Default() // Initialize the router here

	// CORS middleware
	s.router.Use(corsMiddleware)

	// log middleware
	s.router.Use(logger.ModifyContext)

	s.router.Static("/docs", "./docs")

	// healtch check
	s.router.GET("/api/test", s.test)

	// public routes

	s.router.POST("/api/users/create", s.createUser)
	s.router.GET("/api/users/products", s.getProducts)
	// s.router.POST("/api/users/purchase", s.purchase)
	s.router.POST("/api/users/purchase", stripeWebhookMiddleware(), s.purchase)

	s.router.POST("/api/users/contact-us", s.contactUs)
	s.router.GET("/api/products/download", s.downloads)

	///client-protected////

	s.router.POST("/api/users/review/:id", s.createReview)  // => purchased users can do reviews
	s.router.GET("/api/users/review", s.reviews)            // => public user slider
	s.router.GET("/api/users/product/:id", s.checkPurchase) // => checking purchases for user

	s.router.POST("/api/admins/login", s.loginAdmin)
	s.router.POST("/api/admins/create", s.createAdmin)

	// protected routes
	authRoutes := s.router.Group("/").Use(s.authMiddleware())
	authRoutes.GET("/api/admins/users", s.users)
	authRoutes.POST("/api/users/logout", s.logout)
	authRoutes.GET("/api/admins/contact-us", s.getAllMails) // => Admin getting all mails

	// dashboardGroup.GET("/images", getDashboardImages(service))
	/*
		authRoutes.GET("/api/users/download") => purchased items sent over in a zip file
	*/

}

func (s *Server) Start() error {
	return s.router.Run(fmt.Sprintf("%s:%s", s.appConfig.Host, s.appConfig.Port))
}
