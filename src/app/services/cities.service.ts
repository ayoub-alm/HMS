import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable, tap} from 'rxjs';
import {VolunteerResponseDto} from '../dtos/response/volunteer.response.dto';
import {environment} from '../../environments/environment';
import {VolunteerCreateDto} from '../dtos/request/volunteer.create.dto';
import {CityResponseDto} from '../dtos/response/city.response.dto';

@Injectable({
  providedIn: 'root',
})

export class CitiesService {
  constructor(private http: HttpClient) {
  }

  baseUrl: string = environment.baseUrl + "/api/cities";

  getAllCities(): Observable<CityResponseDto[]> {
    return this.http.get<CityResponseDto[]>(`${this.baseUrl}`);
  }

}
