import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../shared/services/auth.service';
import {User} from '../shared/models/user';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginSuccessful: boolean;

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private auth: AuthService, public dialogRef: MatDialogRef<LoginComponent>) {
    this.loginSuccessful = false;
  }

  ngOnInit() {
  }

  onSubmit(loginForm) {
    const username = loginForm.username;
    const password = loginForm.password;
    console.log(username);
    console.log(password);

    this.auth.loginUser(username, password).subscribe(res => {
      if (res) {
        this.loginSuccessful = true;
        this.dialogRef.close({
          data: this.loginSuccessful,
        });
      } else {
        this.loginSuccessful = false;
        this.dialogRef.close({
          data: this.loginSuccessful,
        });
      }
    });
  }

}
