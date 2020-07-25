import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { PcrFeSharedModule } from 'app/shared/shared.module';
import { PcrFeCoreModule } from 'app/core/core.module';
import { PcrFeAppRoutingModule } from './app-routing.module';
import { PcrFeHomeModule } from './home/home.module';
import { PcrFeEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    PcrFeSharedModule,
    PcrFeCoreModule,
    PcrFeHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    PcrFeEntityModule,
    PcrFeAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class PcrFeAppModule {}
