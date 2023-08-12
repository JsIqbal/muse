package dashboard

import (
	"github.com/gin-gonic/gin"
	"go-rest/svc"
)

func SetupDashboardRoutes(router *gin.RouterGroup, service svc.Service) {
	dashboardGroup := router.Group("/dashboard")
	{
		dashboardGroup.GET("/images", getDashboardImages(service))
	}
}