import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PaintingComponent } from './painting/painting.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: 'home',component:HomeComponent},
   { path: 'login' , component: LoginComponent},
  { path: 'registration',component:RegistrationComponent},
  { path: 'services',component:ServicesComponent},
  { path: 'contact-us',component:ContactUsComponent},
  { path: 'painting',component:PaintingComponent},
  { path: 'admin',component:AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  HomeComponent,
  LoginComponent,
  RegistrationComponent,
  ServicesComponent,
  ContactUsComponent,
  PaintingComponent,
  AdminComponent
]