/**
 * Created by mac on 02/04/2018.
 */
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import 'rxjs';
import {Injectable} from '@angular/core';
import {Image} from './Image';
import {User} from "./User";

@Injectable()
export class DataService {
  constructor(private db: AngularFireDatabase) {
  }
  async getNameFromUid(uid: string) {
    /*const users = await this.getUsers();
    for (const user of users) {
      if (user.uid === uid) {
        return user.displayname;
      }
    }*/
    return 'name not found';
  }
  getImages() {
    const images = [];
    this.db.list('/images').valueChanges().subscribe(data => {
      for (const image of data) {
        images.push(Image.fromJson(image));
      }
    });
    return images;
  }

  getImageBitString(id: number) {
    return this.db.list('/images/' + id + '/bitstring');
  }

  // This goes nuts?
  getUsers(): User[] {
    const users = [];
    this.db.list('/users').valueChanges().subscribe(data => {
      for (const user of data) {
        users.push(User.fromJson(user));
      }
    });
    console.log(users);
    return users;
  }

  getDb() {
    return this.db;
  }
}
