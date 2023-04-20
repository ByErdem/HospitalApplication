import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {path:'main', component:MainComponent},
  {path:'',component:MainComponent},
  {path:"patients",component:MainComponent},
  {path:"doctors",component:MainComponent},
  {path:"appointments",component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
