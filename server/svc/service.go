// package svc

// type service struct {
//     dashboardRepo DashboardRepo
//     userRepo      UserRepo
//     adminRepo     AdminRepo
// }

// func NewService(dashboardRepo DashboardRepo, userRepo UserRepo, adminRepo AdminRepo) Service {
//     return &service{
//         dashboardRepo: dashboardRepo,
//         userRepo:      userRepo,
//         adminRepo:     adminRepo,
//     }
// }

// func (s *service) GetDashboardImages() []*Dashboard {
//     return s.dashboardRepo.GetDashboardImages()
// }

// func (s *service) CreateUser(std *User) {
//     s.userRepo.CreateUser(std)
// }

// func (s *service) LoginAdmin(std *Admin) *Admin {
//     return s.adminRepo.LoginAdmin(std)
// }

// func (s *service) CreateAdmin(std *Admin) {
//     s.adminRepo.CreateAdmin(std)
// }

// func (s *service) GetAdminByUsername(username string) *Admin {
//     return s.adminRepo.GetAdminByUsername(username)
// }

package svc

type service struct {
    dashboardRepo DashboardRepo
    userRepo      UserRepo
    adminRepo     AdminRepo
}

func NewService(dashboardRepo DashboardRepo, userRepo UserRepo, adminRepo AdminRepo) Service {
    return &service{
        dashboardRepo: dashboardRepo,
        userRepo:      userRepo,
        adminRepo:     adminRepo,
    }
}

func (s *service) GetDashboardImages() []*Dashboard {
    return s.dashboardRepo.GetDashboardImages()
}

func (s *service) CreateUser(std *User) {
    s.userRepo.CreateUser(std)
}

func (s *service) LoginAdmin(std *Admin) *Admin {
    return s.adminRepo.LoginAdmin(std)
}

func (s *service) CreateAdmin(std *Admin) {
    s.adminRepo.CreateAdmin(std)
}

func (s *service) GetAdminByUsername(username string) *Admin {
    return s.adminRepo.GetAdminByUsername(username)
}

func (s *service) GetUserByEmail(email string) *User {
    return s.userRepo.GetUserByEmail(email)
}
