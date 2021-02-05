import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { PathScreenComponent } from './path-screen/path-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    SchedulesComponent,
    PathScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
