import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';

@NgModule({
  imports: [
      CommonModule,
      ReactiveFormsModule,
      SharedModule
  ],
  declarations: [LoginComponent, SignUpComponent],
  exports: [ LoginComponent, SignUpComponent ],
  providers: [AngularFirestore]
})
export class MembershipModule { }
