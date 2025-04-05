import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import {VolunteerDashboardComponent} from './atlas/volunteer/volunteer-dashboard/volunteer-dashboard.component';


const routes: Routes = [
  {path:'', component: IndexComponent, children:[
      {path:'', component: VolunteerDashboardComponent},
      {path:'volunteers', loadChildren:()=>import('./atlas/volunteer/volunteer.module').then(m => m.VolunteerModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
