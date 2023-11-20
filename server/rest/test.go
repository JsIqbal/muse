package rest

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func (s *Server) test(ctx *gin.Context) {
	ctx.JSON(http.StatusOK, gin.H{"message": "Testing Route"})
}
