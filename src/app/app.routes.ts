import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'admin', loadChildren: () => { return import('./admin/admin.module').then(m => m.AdminModule);}}
];
