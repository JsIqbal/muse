// package repo

// import (
// 	"fmt"
// 	"go-rest/svc"

// 	"gorm.io/gorm"
// )

// type UserRepo interface {
// 	svc.UserRepo
// }

// type userRepo struct {
// 	db *gorm.DB
// }

// func NewUserRepo(db *gorm.DB) UserRepo {
// 	return &userRepo{
// 		db: db,
// 	}
// }

// func (r *userRepo) CreateUser(user *svc.User) {
// 	result := r.db.Create(user)

// 	if result.Error != nil {
// 		fmt.Println("Error while creating user:", result.Error)
// 	}
// }


// func (r *userRepo) GetUserByEmail(email string) *svc.User {
//     var user svc.User
//     result := r.db.Where("email = ?", email).First(&user)

//     if result.Error != nil {
//         fmt.Println("Error while fetching admin:", result.Error)
//         return nil
//     }

//     return &user
// }

package repo

import (
	"fmt"
	"go-rest/svc"
	"gorm.io/gorm"
)

type userRepo struct {
	db *gorm.DB
}

func NewUserRepo(db *gorm.DB) svc.UserRepo {
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
		fmt.Println("Error while fetching user:", result.Error)
		return nil
	}

	return &user
}

func (r *userRepo) GetUserByID(userID string) *svc.User {
	var user svc.User
	result := r.db.Where("id = ?", userID).First(&user)

	if result.Error != nil {
		fmt.Println("Error while fetching user by ID:", result.Error)
		return nil
	}

	return &user
}
