import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule, MatFormFieldModule, MatToolbarModule, MatSlideToggleModule, MatExpansionModule, MatIconModule, MatButtonModule, MatMenuModule, MatListModule, MatAutocompleteModule, MatSelectModule, MatOptionModule, MatTabsModule, MAT_DATE_LOCALE, MatSnackBarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/service/dashboard/dashboard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from 'src/app/modules/auth/login/login.component';
import { RegisterComponent } from 'src/app/modules/auth/register/register.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import {DataTablesModule} from 'angular-datatables';;
import { DynamicChemicalComponent } from 'src/app/modules/survey/dynamic-chemical/dynamic-chemical.component';
import { DynamicDeviceComponent } from 'src/app/modules/survey/dynamic-device/dynamic-device.component';
import { DynamicChemical1Component } from 'src/app/modules/survey/dynamic-chemical1/dynamic-chemical1.component';
import { DynamicChemical2Component } from 'src/app/modules/survey/dynamic-chemical2/dynamic-chemical2.component';
import { DynamicDevice1Component } from 'src/app/modules/survey/dynamic-device1/dynamic-device1.component';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DynamicDeviceComponent,
    DynamicDevice1Component,
    DynamicChemicalComponent,
    DynamicChemical1Component,
    DynamicChemical2Component,
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatOptionModule,
    MatTabsModule,
    DataTablesModule,
    MatSnackBarModule
  ],
  providers: [
    DashboardService,
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}

  ],
  entryComponents:[
    DynamicDeviceComponent, 
    DynamicDevice1Component,
    DynamicChemicalComponent,
    DynamicChemical1Component,
    DynamicChemical2Component
  ]
})
export class DefaultModule { }
