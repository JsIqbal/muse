package svc

import "github.com/google/uuid"

type service struct {
	dashboardRepo DashboardRepo
	userRepo      UserRepo
	adminRepo     AdminRepo
	productRepo   ProductRepo
	purchaseRepo  PurchaseRepo
}

func NewService(dashboardRepo DashboardRepo, userRepo UserRepo, adminRepo AdminRepo, productRepo ProductRepo, purchaseRepo PurchaseRepo) Service {
	return &service{
		dashboardRepo: dashboardRepo,
		userRepo:      userRepo,
		adminRepo:     adminRepo,
		productRepo:   productRepo,
		purchaseRepo:  purchaseRepo,
	}
}

func (s *service) GetDashboardImages() []*Dashboard {
	return s.dashboardRepo.Get()
}

func (s *service) CreateUser(std *User) {
	s.userRepo.CreateUser(std)
}

func (s *service) LoginAdmin(std *Admin) *Admin {
	return s.adminRepo.Login(std)
}

func (s *service) CreateAdmin(std *Admin) {
	s.adminRepo.Create(std)
}

func (s *service) FindAdminByUsername(username string) *Admin {
	return s.adminRepo.Find(username)
}

func (s *service) GetUserByEmail(email string) *User {
	return s.userRepo.GetUserByEmail(email)
}

func (s *service) GetUserByID(userID string) *User {
	return s.userRepo.GetUserByID(userID)
}

func (s *service) GetProducts() []*Product {
	return s.productRepo.GetProducts()
}

func (s *service) CreatePurchase(userID string, productID string) error {
	product, err := s.productRepo.GetProductByID(productID)
	if err != nil {
		return err
	}

	purchase := &Purchase{
		ID:          uuid.New(),
		UserID:      userID,
		ProductID:   productID,
		ProductName: product.ProductName,
	}

	err = s.purchaseRepo.CreatePurchase(purchase)
	if err != nil {
		return err
	}

	return nil
}

func (s *service) GetAllUsers() []*User {
	return s.userRepo.Get()
}
