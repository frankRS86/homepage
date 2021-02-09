import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { PathScreenComponent } from './paths-overview-screen/paths-overview-screen.component';
import { PathDetailScreenComponent } from './path-detail-screen/path-detail-screen.component';
import { ExerciseScreenComponent } from './exercise-screen/exercise-screen.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    SchedulesComponent,
    PathScreenComponent,
    PathDetailScreenComponent,
    ExerciseScreenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
