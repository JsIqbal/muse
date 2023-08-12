package dashboard

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"go-rest/svc"
)

func getDashboardImages(service svc.Service) gin.HandlerFunc {
	return func(ctx *gin.Context) {
		ctx.JSON(http.StatusOK, gin.H{"message": "Dashboard Images Request Recieved"})
	}
}