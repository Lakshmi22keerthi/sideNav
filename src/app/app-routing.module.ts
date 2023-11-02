import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup', component:SignupComponent },
  {path:'dashboard',component:DashboardComponent,
  children:[
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'projects',component:ProjectsComponent},
    {path:'blog',component:BlogComponent},
    {path:'contact',component:ContactComponent},
    {path:'',redirectTo:'home',pathMatch:'full'},
  ]
},
  {path:'', redirectTo:'/login',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
