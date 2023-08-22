package rest

import (
	"fmt"
	"go-rest/config"
	"go-rest/svc"

	"github.com/gin-gonic/gin"

	"go-rest/rest/admin"
	"go-rest/rest/dashboard"
	"go-rest/rest/test"
	"go-rest/rest/user"
)

type Server struct {
	router    *gin.Engine
	svc       svc.Service
	appConfig *config.Application
}

func NewServer(svc svc.Service, appConfig *config.Application) (*Server, error) {
	server := &Server{
		svc:       svc,
		appConfig: appConfig,
	}

	server.setupRouter()

	return server, nil
}

func (s *Server) setupRouter() {
	router := gin.Default()
	router.Use(corsMiddleware)
	router.Static("/docs", "./docs") // swagger docs initialization

	s.router = router

	admin.SetupAdminRoutes(router.Group("/api"), s.svc)
	dashboard.SetupDashboardRoutes(router.Group("/api"), s.svc)
	user.SetupUserRoutes(router.Group("/api"), s.svc)
	test.SetupTestRoutes(router.Group("/api"), s.svc)
}

func (s *Server) Start() error {
	return s.router.Run(fmt.Sprintf("%s:%s", s.appConfig.Host, s.appConfig.Port))
}
