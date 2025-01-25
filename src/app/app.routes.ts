import { Routes } from '@angular/router';
import { HomeComponent } from './front-end/home/home.component';
import { LoginComponent } from './login/login.component';
import {FormComponent} from './front-end/form/form.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'register', component:FormComponent},
    {path:'admin', loadChildren: () => { return import('./admin/admin.module').then(m => m.AdminModule);}}
];
