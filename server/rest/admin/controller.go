package admin

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"go-rest/svc"
)


func loginAdmin(service svc.Service) gin.HandlerFunc {
	return func(ctx *gin.Context) {
		var admin svc.Admin

		// Retrieve validated data from context
		loginSchema, exists := ctx.Get("loginSchema")
		if !exists {
			ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to retrieve login data from context"})
			return
		}
		schema := loginSchema.(LoginSchema)

		// Use the validated data
		admin.Username = schema.Username
		admin.Password = schema.Password

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
		schema, exists := ctx.Get("createAdminSchema")
		if !exists {
			ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Schema not found in context"})
			return
		}

		adminSchema, ok := schema.(CreateAdminSchema)
		if !ok {
			ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Invalid schema in context"})
			return
		}

		admin := svc.Admin{
			Username: adminSchema.Username,
			Password: adminSchema.Password,
		}

		service.CreateAdmin(&admin)

		ctx.JSON(http.StatusOK, gin.H{"message": "Admin created successfully"})
	}
}
