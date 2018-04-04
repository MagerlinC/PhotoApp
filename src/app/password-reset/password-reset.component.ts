import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PasswordService } from '../passwordservice';
import { Password } from '../password';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})


export class PasswordResetComponent implements OnInit { 
   passwords: Password[];
   errorMessage: String;
   bookName: String;
   password = new Password();   
   constructor(private passwordService: PasswordService) { }
   ngOnInit(): void {
        this.fetchPasswords();
   }
   fetchPasswords(): void {
        this.passwordService.getPasswordsWithObservable()
	    .subscribe( passwords => this.passwords = passwords,
                        error => this.errorMessage = <any>error);    
   }

   private reset() {
       this.password.id = null;	 
	   this.password.pass = null;
	   this.errorMessage = null;
   }
} 