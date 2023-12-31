package repo

import (
	"errors"
	"fmt"
	"go-rest/svc"

	"gorm.io/gorm"
)

type adminRepo struct {
	db *gorm.DB
}

func NewAdminRepo(db *gorm.DB) svc.AdminRepo {
	return &adminRepo{
		db: db,
	}
}

func (r *adminRepo) Login(admin *svc.Admin) *svc.Admin {
	var user svc.Admin
	result := r.db.Where("username = ?", admin.Username).First(&user)

	if result.Error != nil {
		fmt.Println("Error while fetching user:", result.Error)
		return nil
	}

	storedPassword := user.Password
	providedPassword := admin.Password

	fmt.Println("Stored Password:", storedPassword)
	fmt.Println("Provided Password:", providedPassword)

	if storedPassword == providedPassword {
		fmt.Println("Login Succeeded")
		return &user
	} else {
		fmt.Println("Login Failed")
		return nil
	}
}

func (r *adminRepo) Create(admin *svc.Admin) error {
	result := r.db.Create(admin)

	if result.Error != nil {
		fmt.Println("Error while creating admin:", result.Error)
		return result.Error
	}

	return nil
}

func (r *adminRepo) Find(username string) (*svc.Admin, error) {
	var admin svc.Admin
	result := r.db.Where("username = ?", username).First(&admin)

	if result.Error != nil {
		fmt.Println("Error while fetching admin:", result.Error)
		return nil, result.Error
	}

	return &admin, nil
}

func (r *adminRepo) FindById(ID string) (*svc.Admin, error) {
	var admin svc.Admin
	result := r.db.Where("ID = ?", ID).First(&admin)

	if result.Error != nil {
		fmt.Println("Error while fetching admin:", result.Error)
		return nil, result.Error
	}

	return &admin, nil
}

func (r *adminRepo) GetAllMails(ID string) ([]*svc.Contact, error) {
	// Check if the admin (user) exists
	admin, err := r.FindById(ID)
	if err != nil {
		// Handle the error (e.g., admin not found)
		return nil, err
	}

	if admin == nil {
		// If admin is not found, return an "Unauthorized" error
		return nil, errors.New("Unauthorized")
	}

	var contacts []*svc.Contact

	// Query the database to retrieve all contact records
	if err := r.db.Find(&contacts).Error; err != nil {
		return nil, err
	}

	return contacts, nil
}
