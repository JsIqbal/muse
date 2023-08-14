package svc

type UserRepo interface {
	CreateUser(std *User)
	GetUserByID(userID string) *User
	GetUserByEmail(email string) *User
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
	GetAdminByUsername(username string) *Admin
}

type AdminRepo interface {
	LoginAdmin(std *Admin) *Admin
	CreateAdmin(std *Admin)
	GetAdminByUsername(username string) *Admin
}

type DashboardRepo interface {
	GetDashboardImages() []*Dashboard
}