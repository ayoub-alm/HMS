import { Component, OnInit } from '@angular/core';
import { MatButton } from "@angular/material/button";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatOption } from "@angular/material/core";
import { MatSelect } from "@angular/material/select";
import { FooterComponent } from '../footer/footer.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    MatOption,
    MatSelect,
    FooterComponent,
    NavBarComponent,
    ReactiveFormsModule
  ],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      "name": ["", Validators.required],
      "lastName": ["", Validators.required],
      "birthday": ["", Validators.required],
      "cin": ["", Validators.required],
      "email": ["", [Validators.required, Validators.email]],
      "phone": ["", [Validators.required]],
      "address": ["", [Validators.required]],
      "sexId": ["", [Validators.required]],
      "blood": ["", [Validators.required]],
      "roleId": ["", [Validators.required]],
      "scoutGradId": ["", [Validators.required]],
      "scoutMissionId": ["", [Validators.required]],
      "saveFromHarm": ["", [Validators.required]],
      "healthStatus": ["", [Validators.required]],
      "schoolDegree": ["", [Validators.required]],
      "organisation": ["", [Validators.required]],
      "profession": ["", [Validators.required]],
      "inscriptionDate": ["", [Validators.required]],
      "familyStatus": ["", [Validators.required]],
      "cityId": ["", [Validators.required]],
      "regionId": ["", [Validators.required]],
    });
  }

  onSubmit() {
    console.log("Form Data:", this.form.value);
    if (this.form.valid) {
      console.log("Form Data:", this.form.value);
    }
  }
}
