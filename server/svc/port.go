package svc

type UserRepo interface {
	CreateUser(std *User)
	GetUserByID(userID string) *User
	GetUserByEmail(email string) *User

	Get() []*User
}

type ProductRepo interface {
	GetProducts() []*Product
	GetProductByID(productID string) (*Product, error)
}

type PurchaseRepo interface {
	CreatePurchase(purchase *Purchase) error
}

type Service interface {
	GetDashboardImages() []*Dashboard

	CreateUser(std *User)
	GetUserByID(userID string) *User
	GetUserByEmail(email string) *User

	GetProducts() []*Product
	CreatePurchase(userID string, productID string) error

	LoginAdmin(std *Admin) *Admin
	CreateAdmin(std *Admin)
	FindAdminByUsername(username string) *Admin
	GetAllUsers() []*User
}

type AdminRepo interface {
	Login(std *Admin) *Admin
	Create(std *Admin)
	Find(username string) *Admin
}

type DashboardRepo interface {
	Get() []*Dashboard
}
