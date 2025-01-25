import { Component } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {NavBarComponent} from '../nav-bar/nav-bar.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIcon, MatIconModule, FooterComponent, RouterModule, MatLabel, MatFormField, MatOption, MatSelect, MatInput, MatButton, NavBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
