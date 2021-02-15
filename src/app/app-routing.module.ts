import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { PathScreenComponent } from './paths-overview-screen/paths-overview-screen.component';
import { PathDetailScreenComponent } from './path-detail-screen/path-detail-screen.component';
import { ExerciseScreenComponent } from './exercise-screen/exercise-screen.component';
import { ExerciseDetailScreenComponent } from './exercise-detail-screen/exercise-detail-screen.component';

const HOME = 'home';
const SCHEDULE = 'schedules';
const PATHS = 'paths';
const PATH = 'paths';
const Exercise = 'exercises';
const ExerciseDetail = 'exercises';

const routes: Routes = [
  {path:'', redirectTo: `${HOME}`,pathMatch:'full'},
  { path: HOME, component: HomeScreenComponent },
  { path: SCHEDULE, component: SchedulesComponent },
  { path: PATHS, component: PathScreenComponent },
  { path: PATH+"/:id", component: PathDetailScreenComponent },
  { path: Exercise, component: ExerciseScreenComponent },
  { path: ExerciseDetail+"/:id", component: ExerciseDetailScreenComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
