import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleComponent } from './vehicle/vehicle.component';
import { LogsComponent } from './logs/logs.component';
import { GetuserComponent } from './getuser/getuser.component';
import { CreateuserComponent } from './createuser/createuser.component';

const routes: Routes = [
  {
    path:'logs',
    component:LogsComponent
  },
  {
    path:'vehicle',
    component:VehicleComponent
  },
  {
    path:'createuser',
    component: CreateuserComponent
  },
  {
    path:'getuser',
    component: GetuserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
