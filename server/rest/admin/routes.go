package admin

import (
	"go-rest/svc"

	"github.com/gin-gonic/gin"
)

func SetupAdminRoutes(router *gin.RouterGroup, service svc.Service) {
	adminGroup := router.Group("/admins")
	{
		adminGroup.POST("/login", loginAdmin(service))
		adminGroup.POST("/create", createAdmin(service))
		adminGroup.GET("/users", users(service))
	}
}
