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

func (r *adminRepo) LoginAdmin(admn *svc.Admin) {

	fmt.Println("All Ok", admn)
	
}
