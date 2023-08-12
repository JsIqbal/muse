package svc

type service struct {
    studentRepo   StudentRepo
    dashboardRepo DashboardRepo
    userRepo      UserRepo
    adminRepo     AdminRepo
}

func NewService(studentRepo StudentRepo, dashboardRepo DashboardRepo, userRepo UserRepo, adminRepo AdminRepo) Service {
    return &service{
        studentRepo:   studentRepo,
        dashboardRepo: dashboardRepo,
        userRepo:      userRepo,
        adminRepo:     adminRepo,
    }
}

func (s *service) GetStudent(id string) *Student {
    return s.studentRepo.GetStudent(id)
}

func (s *service) CreateStudent(std *Student) {
    s.studentRepo.CreateStudent(std)
}

func (s *service) UpdateStudent(id string, std *Student) *Student {
    return s.studentRepo.UpdateStudent(id, std)
}

func (s *service) DeleteStudent(id string) *Student {
    return s.studentRepo.DeleteStudent(id)
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
