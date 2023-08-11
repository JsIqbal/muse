package rest

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func (s *Server) getDashboardImages(ctx *gin.Context) {
	ctx.JSON(http.StatusOK, "Recieved the request")
}