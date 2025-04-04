import { Routes } from '@angular/router';
import { HomeComponent } from './front-end/home/home.component';
import { LoginComponent } from './login/login.component';
import {FormComponent} from './front-end/form/form.component';
import {AboutUsComponent} from './front-end/about-us/about-us.component';
import {OrganisationRegisterComponent} from './front-end/organisation-register/organisation-register.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'register', component:FormComponent},
    {path:'about-us', component:AboutUsComponent},
    {path:'organisation-register', component:OrganisationRegisterComponent},
    {path:'admin', loadChildren: () => { return import('./admin/admin.module').then(m => m.AdminModule);}}
];
