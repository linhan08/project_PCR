import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {StudentListComponent} from './student-list/student-list.component';
import {AddStudentComponent} from './add-student/add-student.component';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: '', component: AddStudentComponent},
  {path: '', component: StudentListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'view-student', component: StudentListComponent},
  {path: 'add-student', component: AddStudentComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
