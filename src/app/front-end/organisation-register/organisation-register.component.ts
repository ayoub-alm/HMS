import { Component } from '@angular/core';
import {NavBarComponent} from '../nav-bar/nav-bar.component';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-organisation-register',
  standalone: true,
  imports: [
    NavBarComponent,
    FooterComponent
  ],
  templateUrl: './organisation-register.component.html',
  styleUrl: './organisation-register.component.css'
})
export class OrganisationRegisterComponent {

}
