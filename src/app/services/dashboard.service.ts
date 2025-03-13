import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface VolunteerDashboard {
  totalVolunteers: number;
  maleVolunteers: number;
  femaleVolunteers: number;
  activeVolunteers: number;
  inactiveVolunteers: number;
  averageAge: number;
  volunteersPerRegion: { [key: string]: number };
  volunteersPerCity: { [key: string]: number };
  bloodGroupDistribution: { [key: string]: number };
}

@Injectable({
  providedIn: 'root'
})
export class VolunteerDashboardService {
  private apiUrl = 'http://localhost:8080/api/dashboard/volunteers';

  constructor(private http: HttpClient) {}

  getDashboardData(filters: any = {}): Observable<VolunteerDashboard> {
    let params = new HttpParams();
    Object.keys(filters).forEach((key) => {
      if (filters[key]) {
        params = params.set(key, filters[key]);
      }
    });

    return this.http.get<VolunteerDashboard>(this.apiUrl, { params });
  }
}
