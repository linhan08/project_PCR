import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { AddCarComponent } from './add-car/add-car.component';
import { ListCarComponent } from './list-car/list-car.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  // {path: '', component: AddCarComponent},
  // {path: '', component: ListCarComponent},
  {path: 'login', component: LoginComponent},
  {path: 'list-car', component: ListCarComponent},
  {path: 'add-car', component: AddCarComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
