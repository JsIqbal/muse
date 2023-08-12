package test

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func TestHandler() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		ctx.JSON(http.StatusOK, gin.H{"message": "Testing Route"})
	}
}
