import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  nameForm = new FormControl('', [
    Validators.required,
    Validators.maxLength(10),
  ]);

  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  submit() {}

  // createUser() {
  //   this.userService.createUser(
  //     uid,
  //     this.nameForm.value,
  //     this.formGroup.avatarId
  //   );
  // }

  googleLogin() {
    this.authService
      .googlelogin()
      .then(() => this.router.navigateByUrl('/top'));
  }

  twitterLogin() {
    this.authService
      .twitterlogin()
      .then(() => this.router.navigateByUrl('/top'));
  }

  anonymouslyLogin() {
    this.authService
      .anonymouslylogin()
      .then(() => this.router.navigateByUrl('/top'));
  }
}
