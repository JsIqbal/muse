package admin

import (
	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
	"net/http"
)

type LoginSchema struct {
	Username string `json:"username" binding:"required,min=4"`
	Password string `json:"password" binding:"required,min=8"`
}

type CreateAdminSchema struct {
	Username string `json:"username" binding:"required,min=4"`
	Password string `json:"password" binding:"required,min=8"`
}



func ValidateLoginSchema() gin.HandlerFunc {
	validate := validator.New()

	return func(ctx *gin.Context) {
		var schema LoginSchema

		if err := ctx.ShouldBindJSON(&schema); err != nil {
			ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			ctx.Abort()
			return
		}

		if err := validate.Struct(schema); err != nil {
			ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			ctx.Abort()
			return
		}

		ctx.Set("loginSchema", schema)
		ctx.Next()
	}
}

func ValidateCreateAdminSchema() gin.HandlerFunc {
	validate := validator.New()

	return func(ctx *gin.Context) {
		var schema CreateAdminSchema

		// Bind the JSON request body to the schema structure
		if err := ctx.ShouldBindJSON(&schema); err != nil {
			ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			ctx.Abort()
			return
		}

		// Validate the schema using the validator
		if err := validate.Struct(schema); err != nil {
			ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			ctx.Abort()
			return
		}

		// If validation passes, continue to the next middleware or controller
		ctx.Set("createAdminSchema", schema) // Store the schema in the context
		ctx.Next()
	}
}
