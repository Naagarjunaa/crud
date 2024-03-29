import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDataComponent } from './add-data/add-data.component';
import { ShowDataComponent } from './show-data/show-data.component';

const routes: Routes = [  
  {path:'' ,redirectTo:'',pathMatch: "full"},
  {path:'addData', component: AddDataComponent},
  {path:'showData', component: ShowDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
