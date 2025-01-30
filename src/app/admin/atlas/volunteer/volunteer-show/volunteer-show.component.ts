import {AfterViewInit, Component, OnInit} from '@angular/core';
import {VolunteerResponseDto} from '../../../../dtos/response/volunteer.response.dto';
import {BehaviorSubject, catchError, of, tap} from 'rxjs';
import {VolunteerService} from '../../../../services/volunteer.service';
import {ActivatedRoute} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {MatCard, MatCardTitle} from '@angular/material/card';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-volunteer-show',
  standalone: true,
  imports: [
    MatIcon,
    MatCard,
    MatCardTitle,
    MatButton
  ],
  templateUrl: './volunteer-show.component.html',
  styleUrl: './volunteer-show.component.css'
})
export class VolunteerShowComponent implements OnInit, AfterViewInit {
  volunteer: BehaviorSubject<VolunteerResponseDto > = new BehaviorSubject({} as VolunteerResponseDto);
  constructor(private volunteerService: VolunteerService,private activeRout: ActivatedRoute,) {
  }

  ngOnInit() {
    const volunteerId:number = this.activeRout.snapshot.params['id'];
    this.volunteerService.getVolunteerById(volunteerId).pipe(
      tap(data => {
        this.volunteer.next(data)
      }),
      catchError(err => of(null))
    ).subscribe()
  }

  ngAfterViewInit() {
  }
}
