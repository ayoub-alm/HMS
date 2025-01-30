import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable, tap} from 'rxjs';
import {VolunteerResponseDto} from '../dtos/response/volunteer.response.dto';
import {environment} from '../../environments/environment';
import {VolunteerCreateDto} from '../dtos/request/volunteer.create.dto';

@Injectable({
  providedIn: 'root',
})

export class VolunteerService {
  constructor(private http: HttpClient) {
  }

  baseUrl: string = environment.baseUrl + "/api/volunteers";

  /**
   * Create new volunteer
   * @param volunteer
   * @return {VolunteerResponseDto} created volunteer
   */
  createVolunteer(volunteer:VolunteerCreateDto): Observable<VolunteerResponseDto>{
    return this.http.post<VolunteerResponseDto>(`${this.baseUrl}`,volunteer).pipe(
      map(data => new VolunteerResponseDto(data)
    ));
  }
  getAllVolunteers(): Observable<VolunteerResponseDto[]> {
    return this.http.get<VolunteerResponseDto[]>(`${this.baseUrl}`).pipe(
      tap(data => {
      data.map(volunteer => new VolunteerResponseDto(volunteer))
    }));
  }

  getVolunteerById(id : number): Observable<VolunteerResponseDto> {
    return this.http.get<VolunteerResponseDto>(`${this.baseUrl}/${id}`).pipe(
      tap(data => new VolunteerResponseDto(data)));
  }

}
