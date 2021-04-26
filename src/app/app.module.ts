import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { PathScreenComponent } from './paths-overview-screen/paths-overview-screen.component';
import { PathDetailScreenComponent } from './path-detail-screen/path-detail-screen.component';
import { ExerciseScreenComponent } from './exercise-screen/exercise-screen.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ExerciseDetailScreenComponent } from './exercise-detail-screen/exercise-detail-screen.component';
import { AuthInterceptor } from './services/AuthInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    SchedulesComponent,
    PathScreenComponent,
    PathDetailScreenComponent,
    ExerciseScreenComponent,
    ExerciseDetailScreenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
