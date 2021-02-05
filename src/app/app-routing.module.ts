import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { PathScreenComponent } from './path-screen/path-screen.component';

const HOME = 'home';
const SCHEDULE = 'schedules';
const LEARNING = 'learning';
const PATHS = 'paths';

const routes: Routes = [
  {path:'', redirectTo: `${HOME}`,pathMatch:'full'},
  { path: HOME, component: HomeScreenComponent },
  { path: SCHEDULE, component: SchedulesComponent },
  { path: LEARNING, component: PathScreenComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
