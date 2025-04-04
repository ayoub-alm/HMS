import {Component, HostListener, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatStepperModule } from "@angular/material/stepper";
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { VolunteerCreateDto } from '../../dtos/request/volunteer.create.dto';
import { VolunteerService } from '../../services/volunteer.service';
import {BehaviorSubject, catchError, of, tap} from 'rxjs';
import { FooterComponent } from '../footer/footer.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import {NgForOf, NgIf} from '@angular/common';
import {CityResponseDto} from '../../dtos/response/city.response.dto';
import {RegionResponseDto} from '../../dtos/response/region.response.dto';
import {CitiesService} from '../../services/cities.service';
import {RegionsService} from '../../services/regions.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    ReactiveFormsModule,
    FooterComponent,
    NavBarComponent,
    HttpClientModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  personalForm!: FormGroup;
  medicalForm!: FormGroup;
  professionalForm!: FormGroup;
  scoutForm!: FormGroup;
  isSuccessRegister:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  cities:BehaviorSubject<CityResponseDto[]> = new BehaviorSubject<CityResponseDto[]>([])
  regions:BehaviorSubject<RegionResponseDto[]> = new BehaviorSubject<RegionResponseDto[]>([])
  isSmallScreen: boolean = window.innerWidth < 768; // Default on load

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isSmallScreen = window.innerWidth < 768; // Adjust when resizing
  }
  constructor(
    private fb: FormBuilder,
    private volunteerService: VolunteerService,
    private snackBar: MatSnackBar,
    private cityService: CitiesService,
    private regionService: RegionsService
  ) {}

  ngOnInit() {
    // ✅ الخطوة 1: المعلومات الشخصية
    this.personalForm = this.fb.group({
      name: ["", Validators.required],
      lastName: ["", Validators.required],
      cin: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      address: ["", Validators.required],
      sexId: ["", Validators.required],
    });

    // ✅ الخطوة 2: المعلومات الطبية
    this.medicalForm = this.fb.group({
      phone: ["", [Validators.required]],
      birthday: ["", Validators.required],
      blood: ["", [Validators.required]],
      healthStatus: ["", [Validators.required]],
      saveFromHarm: ["", [Validators.required]],
    });

    // ✅ الخطوة 3: المعلومات المهنية
    this.professionalForm = this.fb.group({
      profession: ["", [Validators.required]],
      familyStatus: ["", [Validators.required]],
      schoolDegree: ["", [Validators.required]],
    });

    // ✅ الخطوة 4: معلومات الكشافة
    this.scoutForm = this.fb.group({
      organisation: ["", [Validators.required]],
      roleId: ["", [Validators.required]],
      scoutGradId: ["", [Validators.required]],
      scoutMissionId: ["", [Validators.required]],
      inscriptionDate: ["", [Validators.required]],
      cityId: ["", [Validators.required]],
      regionId: ["", [Validators.required]],
    });


    this.regionService.getAllRegions().subscribe(data => {
      this.regions.next(data);
    })

    this.cityService.getAllCities().subscribe(data => {
      this.cities.next(data);
    })
  }

  onSubmit() {
    if (
      this.personalForm.invalid ||
      this.medicalForm.invalid ||
      this.professionalForm.invalid ||
      this.scoutForm.invalid
    ) {
      this.snackBar.open("يرجى ملء جميع الحقول المطلوبة", "موافق", { duration: 3000 });
      return;
    }

    // ✅ دمج جميع البيانات من النماذج المختلفة
    const formData = {
      ...this.personalForm.value,
      ...this.medicalForm.value,
      ...this.professionalForm.value,
      ...this.scoutForm.value,
    };

    const volunteer: VolunteerCreateDto = new VolunteerCreateDto(formData);

    this.volunteerService.createVolunteer(volunteer).pipe(
      tap((response) => {
        this.isSuccessRegister.next(true);
        this.snackBar.open(`مرحبًا بك في عالم المتطوعين ${response.name} ${response.lastName}`, "موافق", { duration: 3000 });
      }),
      catchError((error) => {
        console.error("Error during volunteer creation:", error);
        this.snackBar.open("حدث خطأ أثناء إنشاء المتطوع", "موافق", { duration: 3000 });
        return of(null);
      })
    ).subscribe();

    console.log("Form Data:", formData);
  }
}
