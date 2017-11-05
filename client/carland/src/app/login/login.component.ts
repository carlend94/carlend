import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import {UserModel} from "../models/user.model";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  error = '';
  form: FormGroup;
  public submitted: boolean;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    fb: FormBuilder
  ) {

  }

  ngOnInit() {
    this.authenticationService.logout();

    this.form = new FormGroup({
      email: new FormControl('', [<any>Validators.required, <any>Validators.minLength(1)]),
      password: new FormControl('', [<any>Validators.required, <any>Validators.minLength(1)])
    });
  }

  // login() {
  //
  //   this.loading = true;
  //   this.authenticationService.login()
  //     .subscribe(result => {
  //       if (result === true) {
  //         // login successful
  //         console.log(result);
  //         this.router.navigate(['/']);
  //       } else {
  //         // login failed
  //         this.error = 'Username or password is incorrect';
  //         this.loading = false;
  //       }
  //     });
  // }

  submitForm(model: UserModel) {
    this.submitted = true; // set form submit to true

    // this.login();
    // console.log(model.email, isValid);
    // let email = model.email;
    // let password = model.password;
    this.authenticationService.login(model)
      .subscribe(
        data => {
          // this.router.navigate(['/']);
          console.log(data)
        },
        error => {
      console.log(error);
        });


      // this.authenticationService.login(model)
      //   .subscribe(result => {
      //       // login successful
      //       console.log(result);
      //       this.router.navigate(['/']);
      //     } else {
      //       // login failed
      //       this.error = 'Username or password is incorrect';
      //       this.loading = false;
      //     }
      //   });
  }

}
