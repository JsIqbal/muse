package test

import (
	"go-rest/svc"

	"github.com/gin-gonic/gin"
)

func SetupTestRoutes(router *gin.RouterGroup, service svc.Service) {
	testGroup := router.Group("/test")
	{
		testGroup.GET("/route", TestHandler())
	}
}
