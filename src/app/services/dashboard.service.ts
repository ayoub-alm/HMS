import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

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
  baseUrl: string = environment.baseUrl + '/api/dashboard/volunteers';

  constructor(private http: HttpClient) {}

  getDashboardData(filters: any = {}): Observable<VolunteerDashboard> {
    let params = new HttpParams();
    Object.keys(filters).forEach((key) => {
      if (filters[key]) {
        params = params.set(key, filters[key]);
      }
    });

    return this.http.get<VolunteerDashboard>(this.baseUrl, { params });
  }
}
