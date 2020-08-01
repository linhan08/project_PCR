import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatListModule, MatAutocompleteModule, MatFormFieldModule, MatSelectModule, MatOptionModule } from '@angular/material';
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
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    PieComponent,
    LineComponent,
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
    MatOptionModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    PieComponent,
    LineComponent
  ]
})
export class SharedModule { }
