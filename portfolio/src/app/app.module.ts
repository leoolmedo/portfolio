import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { DockMenuComponent } from './components/dock-menu/dock-menu.component';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { EducationComponent } from './components/education/education.component';
import { FormsModule } from '@angular/forms';
import { SkilsComponent } from './components/skils/skils.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DockMenuComponent,
    PersonalDataComponent,
    JobsComponent,
    EducationComponent,
    SkilsComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
