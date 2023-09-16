package repo

import (
	"errors"
	"fmt"
	"go-rest/svc"
	"go-rest/util"

	"github.com/google/uuid"
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

func (r *userRepo) GetUserByEmail(email string) (*svc.User, error) {
	var user svc.User
	result := r.db.Where("email = ?", email).First(&user)

	if result.Error != nil {
		if errors.Is(result.Error, gorm.ErrRecordNotFound) {
			return nil, nil
		}
		return nil, result.Error
	}

	return &user, nil
}

func (r *userRepo) GetUserByID(userID string) (*svc.User, error) {
	var user svc.User
	result := r.db.Where("id = ?", userID).First(&user)

	if result.Error != nil {
		if errors.Is(result.Error, gorm.ErrRecordNotFound) {
			return nil, nil
		}
		return nil, result.Error
	}

	return &user, nil
}

// func (r *userRepo) Review(userID, name, role, review string) (*svc.Review, error) {
// 	// Check if the user exists
// 	user, err := r.GetUserByID(userID)
// 	if err != nil {
// 		// Handle the error (e.g., user not found)
// 		return nil, err
// 	}

// 	if user == nil {
// 		// If user is not found, return an error
// 		return nil, errors.New("User not found")
// 	}

// 	// Create a new review record
// 	newReview := &svc.Review{
// 		ID:     userID,
// 		Name:   name,
// 		Role:   role,
// 		Review: review,
// 	}

// 	// Insert the new review into the database
// 	if err := r.db.Create(newReview).Error; err != nil {
// 		return nil, err
// 	}

// 	return newReview, nil
// }

// func (r *userRepo) Review(userID, name, role, review string) (*svc.Review, error) {
// 	// Check if the user exists
// 	user, err := r.GetUserByID(userID)
// 	if err != nil {
// 		// Handle the error (e.g., user not found)
// 		fmt.Printf("Error fetching user: %v\n", err)
// 		return nil, err
// 	}

// 	if user == nil {
// 		// If user is not found, return an error
// 		fmt.Printf("User with ID %s not found\n", userID)
// 		return nil, errors.New("User not found")
// 	}

// 	// Create a new review record
// 	newReview := &svc.Review{
// 		ID:     userID,
// 		Name:   name,
// 		Role:   role,
// 		Review: review,
// 	}

// 	// Insert the new review into the database
// 	if err := r.db.Create(newReview).Error; err != nil {
// 		return nil, err
// 	}

// 	return newReview, nil

// }

func (r *userRepo) GetReviewByUserID(userID string) (*svc.Review, error) {
	// Create a new Review object to store the result
	var review svc.Review

	// Query the database for a review with the given userID
	if err := r.db.Where("ID = ?", userID).First(&review).Error; err != nil {
		if err == gorm.ErrRecordNotFound {
			// If no record is found, return nil and a specific error
			return nil, nil
		}
		// Handle other database query errors
		return nil, err
	}

	return &review, nil
}

func (r *userRepo) Review(userID, name, role, review string) (*svc.Review, error) {
	// Check if the user exists
	user, err := r.GetUserByID(userID)
	if err != nil {
		// Handle the error (e.g., user not found)
		fmt.Printf("Error fetching user: %v\n", err)
		return nil, err
	}

	if user == nil {
		// If user is not found, return an error
		fmt.Printf("User with ID %s not found\n", userID)
		return nil, errors.New("User not found")
	}

	// Check if a review with the same userID already exists
	existingReview, err := r.GetReviewByUserID(userID)
	if err != nil {
		// Handle the error (e.g., database query error)
		fmt.Printf("Error checking for existing review: %v\n", err)
		return nil, err
	}

	if existingReview != nil {
		// If a review with the same userID exists, return an error
		fmt.Printf("user with ID %s has already submitted a review\n", userID)
		return nil, errors.New("user has already submitted a review")
	}

	// Create a new review record
	newReview := &svc.Review{
		ID:     userID,
		Name:   name,
		Role:   role,
		Review: review,
	}

	// Insert the new review into the database
	if err := r.db.Create(newReview).Error; err != nil {
		return nil, err
	}

	return newReview, nil
}

func (r *userRepo) Reviews() ([]*svc.Review, error) {
	var reviews []*svc.Review

	// Query the database to retrieve all review records
	if err := r.db.Find(&reviews).Error; err != nil {
		return nil, err
	}

	return reviews, nil
}

func (r *userRepo) Get() []*svc.User {
	// Declare a slice of pointers to svc.User
	var users []*svc.User

	// Find all records in the user table and append them to the slice
	result := r.db.Find(&users)
	if result.Error != nil {
		fmt.Println("Error while fetching all users:", result.Error)
		return nil
	}

	// Return the slice of users
	return users
}

func (r *userRepo) ContactUs(email, subject, content string) (*svc.Contact, error) {
	// Generate a new UUID for the ID field
	id := uuid.New().String()

	// Create a new Contact instance
	contact := &svc.Contact{
		ID:        id, // Set the generated UUID as the ID
		Email:     email,
		Subject:   subject,
		Content:   content,
		CreatedAt: util.GetCurrentTimestamp(),
	}

	// Save the Contact instance to the database
	if err := r.db.Create(contact).Error; err != nil {
		return nil, err
	}

	return contact, nil
}

func (r *userRepo) Purchase(userID string) bool {
	// Check if the user exists in the purchase table
	var count int64
	r.db.Model(&svc.Purchase{}).Where("user_id = ?", userID).Count(&count)

	return count > 0
}
