package svc

type service struct {
	studentRepo   StudentRepo
	dashboardRepo DashboardRepo
}

func NewService(studentRepo StudentRepo, dashboardRepo DashboardRepo) Service {
	return &service{
		studentRepo:   studentRepo,
		dashboardRepo: dashboardRepo,
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

