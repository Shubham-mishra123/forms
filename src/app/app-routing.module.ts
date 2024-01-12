import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RformsComponent } from './rforms/rforms.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent, pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"rform",component:RformsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
