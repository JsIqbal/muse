package user

import (
	"github.com/gin-gonic/gin"
	"go-rest/svc"
)

func SetupUserRoutes(router *gin.RouterGroup, service svc.Service) {
	userGroup := router.Group("/users")
	{
		userGroup.POST("/create", getDashboardImages(service))
	}
}