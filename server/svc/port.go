package svc


type UserRepo interface {
	CreateUser(std *User)
}

type AdminRepo interface {
    LoginAdmin(std *Admin) *Admin
    CreateAdmin(std *Admin)
    GetAdminByUsername(username string) *Admin // Accepts a string argument
}


type DashboardRepo interface {
	GetDashboardImages() []*Dashboard
}

type Service interface {
	GetDashboardImages() []*Dashboard

	CreateUser(std *User)

	LoginAdmin(std *Admin) *Admin
	CreateAdmin(std *Admin)
	GetAdminByUsername(username string) *Admin
}

