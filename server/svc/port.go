package svc


type UserRepo interface {
	CreateUser(std *User)
	GetUserByID(userID string) *User
	GetUserByEmail(email string) *User
}

type ProductRepo interface {

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

    CreateUser(std *User) // Add this line to include CreateUser in the interface
    GetUserByID(userID string) *User
    GetUserByEmail(email string) *User

    LoginAdmin(std *Admin) *Admin
    CreateAdmin(std *Admin)
    GetAdminByUsername(username string) *Admin
}



// type Service interface {
// 	GetDashboardImages() []*Dashboard

// 	CreateUser(std *User)
// 	GetUserByEmail(email string) *User

// 	LoginAdmin(std *Admin) *Admin
// 	CreateAdmin(std *Admin)
// 	GetAdminByUsername(username string) *Admin
// }