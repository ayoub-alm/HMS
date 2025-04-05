import { Component } from '@angular/core';
import {AuthService} from "../services/AuthService";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {catchError, of, tap, throwError} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClientModule} from "@angular/common/http";
import {UserLoginRequest} from "../dtos/request/UserLoginRequest";
import {MatError, MatFormFieldModule} from "@angular/material/form-field";
import {NgIf} from "@angular/common";
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule, MatError, NgIf, MatFormFieldModule,MatIconModule, MatInputModule, MatSelectModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers:[AuthService]
})
export class LoginComponent {
    loginForm: FormGroup;
    constructor(private authService: AuthService, private router: Router, private fb: FormBuilder,
                private snackBar: MatSnackBar) {
        this.loginForm = this.fb.group({
          email: ['atlas.admin@fnsm.ma', [Validators.required, Validators.email]],
          password: ['121314', [Validators.required, Validators.minLength(6)]],
        })
    }


  /**
   *
   */
  login(){
    this.router.navigateByUrl('/admin');
  }


  private showErrorMessage(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // The message will disappear after 3 seconds
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  navigateToHomePage(){
    this.router.navigateByUrl('/')
  }
}

export class TokenResponse{
  constructor(public token: string) {
  }
}
