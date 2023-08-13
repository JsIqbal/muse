package admin

import (
	"github.com/gin-gonic/gin"
	"go-rest/svc"
)

func SetupAdminRoutes(router *gin.RouterGroup, service svc.Service) {
	adminGroup := router.Group("/admins")
	{
		adminGroup.POST("/login", ValidateLoginSchema(), loginAdmin(service))
		adminGroup.POST("/create",ValidateCreateAdminSchema(), createAdmin(service))
	}
}