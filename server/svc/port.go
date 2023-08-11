package svc

type StudentRepo interface {
	GetStudent(id string) *Student
	CreateStudent(std *Student)
	UpdateStudent(id string, std *Student) *Student
	DeleteStudent(id string) *Student
}

type UserRepo interface {
	CreateUser(std *User)
}

type AdminRepo interface {
	LoginAdmin(std *Admin)
}

type DashboardRepo interface {
	GetDashboardImages() []*Dashboard
}

type Service interface {
	GetStudent(id string) *Student
	CreateStudent(std *Student)
	UpdateStudent(id string, std *Student) *Student
	DeleteStudent(id string) *Student

	GetDashboardImages() []*Dashboard

	CreateUser(std *User)
}

