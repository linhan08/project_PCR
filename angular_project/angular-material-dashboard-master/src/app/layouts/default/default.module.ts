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
import {DataTablesModule} from 'angular-datatables';
import { SkillsRatingComponent } from 'src/app/modules/skills-rating/skills-rating.component';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    SkillsRatingComponent
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
  entryComponents:[SkillsRatingComponent]
})
export class DefaultModule { }
