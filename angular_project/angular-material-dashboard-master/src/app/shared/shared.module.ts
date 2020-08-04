import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatListModule, MatAutocompleteModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatSlideToggleModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AreaComponent } from './widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { PieComponent } from './widgets/pie/pie.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LineComponent } from './widgets/line/line.component';
import { ChemicalComponent } from './widgets/chemical/chemical.component';
import { DeviceComponent } from './widgets/device/device.component';
import { EmployeeComponent } from './widgets/employee/employee.component';
import { StatusComponent } from './widgets/status/status.component';
import {DataTablesModule} from 'angular-datatables';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    PieComponent,
    LineComponent,
    ChemicalComponent,
    DeviceComponent,
    EmployeeComponent,
    StatusComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatSlideToggleModule,
    MatCardModule,
    DataTablesModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    PieComponent,
    LineComponent,
    ChemicalComponent,
    DeviceComponent,
    EmployeeComponent,
    StatusComponent,
  ]
})
export class SharedModule { }
