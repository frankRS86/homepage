import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const HOME = 'home';
const LEARNING = 'learning'

const routes: Routes = [
  {path:'', redirectTo: `/${HOME}`,pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
