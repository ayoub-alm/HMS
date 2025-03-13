import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe, KeyValuePipe, NgIf } from '@angular/common';
import { Chart, ChartConfiguration, ChartType, registerables } from 'chart.js';
import { VolunteerDashboard, VolunteerDashboardService } from '../../../../services/dashboard.service';
import {BaseChartDirective} from 'ng2-charts';

// Register necessary components for Chart.js
Chart.register(...registerables);

@Component({
  selector: 'app-volunteer-dashboard',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    BaseChartDirective,
  ],
  templateUrl: './volunteer-dashboard.component.html',
  styleUrl: './volunteer-dashboard.component.css'
})
export class VolunteerDashboardComponent implements OnInit {
  dashboardData: VolunteerDashboard | null = null;
  filters: any = {
    gender: '',
    cityId: '',
    regionId: '',
    roleId: '',
    blood: '',
    profession: ''
  };

  // 🟢 Gender Distribution (Pie Chart)
  genderChartData: ChartConfiguration<'pie'>['data'] = {
    labels: ['ذكر', 'أنثى'],
    datasets: [{
      data: [0, 0], // Placeholder
      backgroundColor: ['#007bff', '#ff6384']
    }]
  };

  genderChartOptions: ChartConfiguration<'pie'>['options'] = {
    responsive: true
  };

  // 🔵 Volunteers Per Region (Bar Chart)
  regionChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [{
      label: 'عدد المتطوعين حسب المنطقة',
      data: [],
      backgroundColor: '#17a2b8'
    }]
  };

  regionChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true
  };

  // 🟠 Volunteers Per City (Doughnut Chart)
  cityChartData: ChartConfiguration<'doughnut'>['data'] = {
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: ['rgba(40,167,69,0.7)', 'rgba(255,204,0,0.66)', 'rgba(220,53,69,0.68)', '#007bff', '#6610f2']
    }]
  };

  cityChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true
  };

  // 🔴 Blood Group Distribution (Line Chart)
  bloodChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [{
      label: 'توزيع المتطوعين حسب فصيلة الدم',
      data: [],
      borderColor: '#dc3545',
      fill: false
    }]
  };

  bloodChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true
  };

  // 🟡 Active vs Inactive Volunteers (Radar Chart)
  activityChartData: ChartConfiguration<'radar'>['data'] = {
    labels: ['نشط', 'غير نشط'],
    datasets: [{
      label: 'المتطوعون النشطون مقابل غير النشطين',
      data: [0, 0],
      backgroundColor: 'rgba(255, 193, 7, 0.4)',
      borderColor: '#ffc107'
    }]
  };

  activityChartOptions: ChartConfiguration<'radar'>['options'] = {
    responsive: true
  };

  constructor(private dashboardService: VolunteerDashboardService) {}

  ngOnInit(): void {
    this.fetchDashboardData();
  }

  fetchDashboardData(): void {
    this.dashboardService.getDashboardData(this.filters).subscribe((data) => {
      this.dashboardData = data;
      this.updateCharts();
    });
  }

  applyFilters(): void {
    this.fetchDashboardData();
  }

  updateCharts(): void {
    if (this.dashboardData) {
      // Update Pie Chart (Gender Distribution)
      this.genderChartData.datasets[0].data = [
        this.dashboardData.maleVolunteers,
        this.dashboardData.femaleVolunteers
      ];

      // Update Bar Chart (Volunteers Per Region)
      this.regionChartData.labels = Object.keys(this.dashboardData.volunteersPerRegion);
      this.regionChartData.datasets[0].data = Object.values(this.dashboardData.volunteersPerRegion);

      // Update Doughnut Chart (Volunteers Per City)
      this.cityChartData.labels = Object.keys(this.dashboardData.volunteersPerCity);
      this.cityChartData.datasets[0].data = Object.values(this.dashboardData.volunteersPerCity);

      // Update Line Chart (Blood Group Distribution)
      this.bloodChartData.labels = Object.keys(this.dashboardData.bloodGroupDistribution);
      this.bloodChartData.datasets[0].data = Object.values(this.dashboardData.bloodGroupDistribution);

      // Update Radar Chart (Active vs Inactive Volunteers)
      this.activityChartData.datasets[0].data = [
        this.dashboardData.activeVolunteers,
        this.dashboardData.inactiveVolunteers
      ];
    }
  }
}
