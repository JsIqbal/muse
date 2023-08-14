package repo

import (
	"fmt"
	"go-rest/svc"

	"gorm.io/gorm"
)

type UserRepo interface {
	svc.UserRepo
}

type userRepo struct {
	db *gorm.DB
}

func NewUserRepo(db *gorm.DB) UserRepo {
	return &userRepo{
		db: db,
	}
}

func (r *userRepo) CreateUser(user *svc.User) {
	result := r.db.Create(user)

	if result.Error != nil {
		fmt.Println("Error while creating user:", result.Error)
	}
}


func (r *userRepo) GetUserByEmail(email string) *svc.User {
    var user svc.User
    result := r.db.Where("email = ?", email).First(&user)

    if result.Error != nil {
        fmt.Println("Error while fetching admin:", result.Error)
        return nil
    }

    return &user
}