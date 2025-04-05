import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../../../front-end/home/home.component';
import {VolunteerIndexComponent} from './volunteer-index/volunteer-index.component';
import {VolunteerShowComponent} from './volunteer-show/volunteer-show.component';
import {VolunteerDashboardComponent} from './volunteer-dashboard/volunteer-dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: VolunteerDashboardComponent },
  { path: '', component: VolunteerDashboardComponent },
  { path: ':id', component: VolunteerShowComponent },
  // { path: '**', component: VolunteerDashboardComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VolunteerRoutingModule { }
