/**
 * Created by mac on 02/04/2018.
 */
/**
 * Created by mac on 02/04/2018.
 */
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router"
import {Injectable} from "@angular/core";
import {UserService} from "./UserService";


@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {

  }

  async canActivate() {
    console.log("OnlyLoggedInUsers");
    const isLoggedIn = await this.userService.getCurrentUserExists().first().toPromise();
    if (!isLoggedIn) {
      // We are not logged in, navigate to login page
      this.router.navigate(['/login']);
      // Deny navigation here, returns false
    }
    // We are logged in, allow navigation here
    return isLoggedIn;
  }
}
