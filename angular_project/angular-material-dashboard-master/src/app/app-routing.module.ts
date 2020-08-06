import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { HomeComponent } from './modules/home/home.component';
import { DynamicDeviceComponent } from './modules/surveys/dynamic-device/dynamic-device.component';
import { DynamicChemicalComponent } from './modules/surveys/dynamic-chemical/dynamic-chemical.component';
import { EmployeeInfoComponent } from './modules/surveys/employee-info/employee-info.component';
import { TestInfoComponent } from './modules/surveys/test-info/test-info.component';
import { ChemicalInfoComponent } from './modules/surveys/chemical-info/chemical-info.component';
import { DeviceInfoComponent } from './modules/surveys/device-info/device-info.component';
import { GeneInfoComponent } from './modules/surveys/gene-info/gene-info.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent},
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'dynamic-device',
    component: DynamicDeviceComponent
  },
  {
    path: 'dynamic-chemical',
    component: DynamicChemicalComponent
  },
  {
    path: 'gene-info',
    component: GeneInfoComponent
  },
  {
    path: 'device-info',
    component: DeviceInfoComponent
  },
  {
    path: 'chemical-info',
    component: ChemicalInfoComponent
  },
  {
    path: 'test-info',
    component: TestInfoComponent
  },
  {
    path: 'employee-info',
    component: EmployeeInfoComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
