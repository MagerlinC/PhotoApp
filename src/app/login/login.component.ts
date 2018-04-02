import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../UserService";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginButton') loginButton;
  constructor(private userService: UserService) {
  }
  ngOnInit() {
  }
  login(mail: string, pass: string) {
    this.userService.login(mail, pass);
    // location.reload();
  }
}
