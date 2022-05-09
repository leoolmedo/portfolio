import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { DockMenuComponent } from './components/dock-menu/dock-menu.component';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { EducationComponent } from './components/education/education.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DockMenuComponent,
    PersonalDataComponent,
    JobsComponent,
    EducationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
