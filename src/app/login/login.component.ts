import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../UserService";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginButton') loginButton;
  constructor(private userService: UserService, private router: Router) {
  }
  ngOnInit() {
  }
  login(mail: string, pass: string) {
    this.userService.login(mail, pass);
    // location.reload();
  }
  forgotPassword(username: string) {
    // Send mysterious HTTP request with json of important info (link to password reset site)
    this.router.navigate(['/pwreset']);
  }
}
