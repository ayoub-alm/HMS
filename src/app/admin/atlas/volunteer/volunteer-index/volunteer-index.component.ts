import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatButton, MatButtonModule} from "@angular/material/button";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable, MatTableDataSource, MatTableModule
} from "@angular/material/table";
import {MatIcon} from "@angular/material/icon";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {MatSort, MatSortHeader, MatSortModule} from "@angular/material/sort";
import {MatFormFieldModule} from '@angular/material/form-field';
import {VolunteerResponseDto} from '../../../../dtos/response/volunteer.response.dto';
import {BehaviorSubject, catchError, of, tap} from 'rxjs';
import {VolunteerService} from '../../../../services/volunteer.service';
import {Router} from '@angular/router';

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];
@Component({
  selector: 'app-volunteer-index',
  standalone: true,
    imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatIcon,MatButton,MatButtonModule],
  templateUrl: './volunteer-index.component.html',
  styleUrl: './volunteer-index.component.css'
})
export class VolunteerIndexComponent implements OnInit, AfterViewInit {
  volunteers: BehaviorSubject<VolunteerResponseDto[]> =  new BehaviorSubject<VolunteerResponseDto[]>([]);
  displayedColumns: string[] = ['id', 'name', 'lastName','cin','birthday', 'organisation'];
  // DataSource for MatTable
  dataSource: MatTableDataSource<VolunteerResponseDto> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private volunteerService: VolunteerService, private router:Router) {
    // Create 100 users
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.volunteerService.getAllVolunteers().pipe(

      tap(data => {
        this.volunteers.next(data)
        this.dataSource.data = this.volunteers.getValue();
      }),
      catchError(err => {
        return of(null)
      })
    ).subscribe()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  showVolunteerDetails(id:number) {
    this.router.navigateByUrl('/admin/volunteers/'+id).then()
  }
}

