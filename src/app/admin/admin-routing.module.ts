import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import path from 'path';
import { PatientAllComponent } from './patient-all/patient-all.component';
import { DeliveriesComponent } from './deliveries/deliveries.component';

const routes: Routes = [
  {path:'', component: IndexComponent, children:[
    {path:'all', component:PatientAllComponent},
    {path:'deliveries', component:DeliveriesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
