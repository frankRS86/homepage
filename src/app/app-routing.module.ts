import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { PathScreenComponent } from './paths-overview-screen/paths-overview-screen.component';
import { PathDetailScreenComponent } from './path-detail-screen/path-detail-screen.component';
import { ExerciseScreenComponent } from './exercise-screen/exercise-screen.component';

const HOME = 'home';
const SCHEDULE = 'schedules';
const PATHS = 'paths';
const PATH = 'path';
const Exercise = 'exercise';

const routes: Routes = [
  {path:'', redirectTo: `${HOME}`,pathMatch:'full'},
  { path: HOME, component: HomeScreenComponent },
  { path: SCHEDULE, component: SchedulesComponent },
  { path: PATHS, component: PathScreenComponent },
  { path: PATH, component: PathDetailScreenComponent },
  { path: Exercise, component: ExerciseScreenComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
