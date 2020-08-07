import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { HomeComponent } from './modules/home/home.component';
import { DynamicDeviceComponent } from './modules/survey/dynamic-device/dynamic-device.component';
import { DynamicChemicalComponent } from './modules/survey/dynamic-chemical/dynamic-chemical.component';


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
