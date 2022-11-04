import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpFormComponent } from './sign-up/sign-up-form/sign-up-form.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';



@NgModule({
  declarations: [
    SignUpFormComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    // Routing
    AuthRoutingModule
  ]
})
export class AuthModule { }
