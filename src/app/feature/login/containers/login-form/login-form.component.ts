import { LoginService } from './../../services/http/login.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) {
    this.loginForm = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.loginService.login(
      this.loginForm.value.username,
      this.loginForm.value.password
    )
    .subscribe(
      response => console.log(response)
    );
  }
}
