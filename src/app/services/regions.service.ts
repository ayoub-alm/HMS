import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable, tap} from 'rxjs';
import {VolunteerResponseDto} from '../dtos/response/volunteer.response.dto';
import {environment} from '../../environments/environment';
import {VolunteerCreateDto} from '../dtos/request/volunteer.create.dto';
import {CityResponseDto} from '../dtos/response/city.response.dto';
import {RegionResponseDto} from '../dtos/response/region.response.dto';

@Injectable({
  providedIn: 'root',
})

export class RegionsService {
  constructor(private http: HttpClient) {
  }

  baseUrl: string = environment.baseUrl + "/api/regions";

  getAllRegions(): Observable<RegionResponseDto[]> {
    return this.http.get<RegionResponseDto[]>(`${this.baseUrl}`);
  }

}
