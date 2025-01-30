import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../../../front-end/home/home.component';
import {VolunteerIndexComponent} from './volunteer-index/volunteer-index.component';
import {VolunteerShowComponent} from './volunteer-show/volunteer-show.component';

const routes: Routes = [
  { path: '', component: VolunteerIndexComponent },
  { path: ':id', component: VolunteerShowComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VolunteerRoutingModule { }
