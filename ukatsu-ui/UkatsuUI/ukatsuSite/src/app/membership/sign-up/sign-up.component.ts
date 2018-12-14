import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public userService: UserService) { }


  ngOnInit() {
    this.signUpForm = this.setUpForm(this.signUpForm);
  }

  signUp() {
    console.log('trying tot sign up!');
    this.userService.emailSignUp(this.email.value, this.password.value);
  }

  setUpForm(form: FormGroup) {
      form = this.formBuilder.group({
        'email': ['', [
          Validators.required,
          Validators.email
          ]
        ],
        'password': ['', [
          Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
          Validators.minLength(6),
          Validators.maxLength(25),
          Validators.required
          ]
        ],
        'region': ['', [
        ]
      ],
    });
    return form;
  }

  get email() { return this.signUpForm.get('email'); }
  get password() { return this.signUpForm.get('password'); }

}
