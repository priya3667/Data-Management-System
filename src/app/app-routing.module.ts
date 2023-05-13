import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { LoginComponent } from './login/login.component';
import { AllEmpComponent } from './all-emp/all-emp.component';
import { AuthGuard } from './auth.guard';
import { ParticularIdComponent } from './particular-id/particular-id.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path :'add-emp',component:AddEmpComponent},
  {path :'login',component:LoginComponent},
  { path:'edit/:id',component:EditComponent},
  {path :'all-emp',canActivate:[AuthGuard] ,component:AllEmpComponent},
   {path:'emp/:id',component:ParticularIdComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }