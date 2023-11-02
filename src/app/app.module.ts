import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule} from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    BlogComponent,
    ContactComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    SidebarComponent,
    BrowserAnimationsModule
    
  ],
  providers: [MatNativeDateModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
