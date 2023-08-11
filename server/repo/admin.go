package repo

import (
	"fmt"
	"go-rest/svc"

	"gorm.io/gorm"
)

type AdminRepo interface {
	svc.AdminRepo
}

type adminRepo struct {
	db *gorm.DB
}

func NewAdminRepo(db *gorm.DB) AdminRepo {
	return &adminRepo{
		db: db,
	}
}

func (r *adminRepo) LoginAdmin(admin *svc.Admin) {
	var user svc.Admin
	result := r.db.Where("username = ?", admin.Username).First(&user)

	if result.Error != nil {
		fmt.Println("Error while fetching user:", result.Error)
		return
	}

	// Match the provided password with the stored password
	if user.Password == admin.Password {
		fmt.Println("Login Succeeded")
	} else {
		fmt.Println("Login Failed")
	}
}



func (r *adminRepo) CreateAdmin(admin *svc.Admin) {
	result := r.db.Create(admin)

	if result.Error != nil {
		fmt.Println("Error while creating admin:", result.Error)
	}
}