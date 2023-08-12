package rest

import (
	"fmt"
	"go-rest/config"
	"go-rest/svc"
	"net/http"

	"github.com/gin-gonic/gin"
	"go-rest/rest/admin" // Adjust the import path
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

	s.router = router

	// Set up admin routes using the adminroutes package
	admin.SetupAdminRoutes(router.Group("/api"), s.svc) // Adjust the function call

	router.POST("/api/users", s.createUser)

	router.GET("/api/test", test)

	router.GET("/api/dashboard/images", s.getDashboardImages)
}

func (s *Server) Start() error {
	return s.router.Run(fmt.Sprintf("%s:%s", s.appConfig.Host, s.appConfig.Port))
}

func test(ctx *gin.Context) {
	ctx.JSON(http.StatusOK, "Hello world")
}
