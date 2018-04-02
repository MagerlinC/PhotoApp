/**
 * Created by mac on 02/04/2018.
 */

export class User {
  static fromJson(json: any): User {
    return new User(
      json.displayname,
      json.uid);
  }
  constructor(public displayname: string, public uid: string) {
  }
}
