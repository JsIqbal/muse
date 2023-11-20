package repo

import (
	"fmt"
	"go-rest/svc"

	"gorm.io/gorm"
)

type DashboardRepo interface {
	Get() []*svc.Dashboard
}

type dashboardRepo struct {
	db *gorm.DB
}

func NewDashboardRepo(db *gorm.DB) svc.DashboardRepo {
	return &dashboardRepo{
		db: db,
	}
}

func (r *dashboardRepo) Get() []*svc.Dashboard {
	var dashboards []*svc.Dashboard
	result := r.db.Find(&dashboards)

	if result.Error != nil {
		fmt.Println("Error while fetching dashboard images:", result.Error)
	}

	return dashboards
}

func (r *dashboardRepo) Downloads() (int, error) {
	var count int64

	// Execute a query to count the number of records in the "purchase" table
	if err := r.db.Model(&svc.Purchase{}).Count(&count).Error; err != nil {
		return 0, err
	}

	return int(count), nil
}
