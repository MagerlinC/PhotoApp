/**
 * Created by mac on 02/04/2018.
 */
import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {AngularFireAuth} from "angularfire2/auth";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import * as firebase from 'firebase/app';
import "rxjs/add/operator/first";
import "rxjs/add/operator/toPromise";
import {DataService} from "./DataService";

@Injectable()
export class UserService {
  user = this.afAuth.authState;
  currentUserExists: Observable<boolean> = this.user.map(user => user !== null);

  constructor(private afAuth: AngularFireAuth, private router: Router) {
  }
  async login(email, password) {
    try {
      await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      await this.user.first().toPromise();
      this.router.navigate(['/images']);
    } catch (Error) {
      alert(Error.message);
    }
  }

  async logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/login']);
  }

  getCurrentUserExists() {
    return this.currentUserExists;
  }
  getCurrentUserMail() {
    return this.afAuth.auth.currentUser.email;
  }
  getCurrentUserUid(): string {
    return this.afAuth.auth.currentUser.uid;
  }
}
