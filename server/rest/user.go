package rest

import (
	"fmt"
	"encoding/json"
	"net/http"
	"go-rest/svc"
	"github.com/gin-gonic/gin"
)

func (s *Server) createUser(ctx *gin.Context) {
	var user svc.User

	body, err := ctx.GetRawData()
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to read request body"})
		return
	}

	err = json.Unmarshal(body, &user)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid JSON data"})
		return
	}

	fmt.Printf("Username: %s\nPassword: %s\n", user.Username, user.Password)
	
	s.svc.CreateUser(&user)

	ctx.JSON(http.StatusOK, gin.H{"message": "User created successfully"})
}
