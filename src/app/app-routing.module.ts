import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';

const HOME = 'home';
const LEARNING = 'learning'

const routes: Routes = [
  {path:'', redirectTo: `/${HOME}`,pathMatch:'full'},
  { path: HOME, component: HomeScreenComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
