package user

import (
	"github.com/gin-gonic/gin"
	"go-rest/svc"
)

func SetupUserRoutes(router *gin.RouterGroup, service svc.Service) {
	userGroup := router.Group("/users")
	{
		userGroup.POST("/create", createUser(service))
		userGroup.GET("/products", getProducts(service))
		userGroup.POST("/purchase", purchase(service))
	}
}

