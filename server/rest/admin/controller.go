package admin


import (
	"encoding/json"
	"net/http"

	"github.com/gin-gonic/gin"
	"go-rest/svc"
)

func loginAdmin(service svc.Service) gin.HandlerFunc {
	return func(ctx *gin.Context) {
		var admin svc.Admin

		// Read and parse request body
		body, err := ctx.GetRawData()
		if err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to read request body"})
			return
		}

		err = json.Unmarshal(body, &admin)
		if err != nil {
			ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid JSON data"})
			return
		}

		authenticatedAdmin := service.LoginAdmin(&admin)

		if authenticatedAdmin != nil {
			ctx.JSON(http.StatusOK, gin.H{"message": "Logged in successfully"})
		} else {
			ctx.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid credentials"})
		}
	}
}

func createAdmin(service svc.Service) gin.HandlerFunc {
	return func(ctx *gin.Context) {
		var admin svc.Admin

		// Read and parse request body
		if err := ctx.ShouldBindJSON(&admin); err != nil {
			ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid JSON data"})
			return
		}

		service.CreateAdmin(&admin)

		ctx.JSON(http.StatusOK, gin.H{"message": "Admin created successfully"})
	}
}