package rest

import (
	"fmt"
	"go-rest/config"
	"go-rest/svc"
	"net/http"

	"github.com/gin-gonic/gin"

	"go-rest/rest/admin" 
	"go-rest/rest/dashboard"
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

	s.router = router

	admin.SetupAdminRoutes(router.Group("/api"), s.svc)
	dashboard.SetupDashboardRoutes(router.Group("/api"), s.svc)
	user.SetupUserRoutes(router.Group("/api"), s.svc)


	router.GET("/api/test", test)

	
}

func (s *Server) Start() error {
	return s.router.Run(fmt.Sprintf("%s:%s", s.appConfig.Host, s.appConfig.Port))
}

func test(ctx *gin.Context) {
	ctx.JSON(http.StatusOK, "Hello world")
}
