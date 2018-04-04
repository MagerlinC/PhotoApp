/**
 * Created by mac on 02/04/2018.
 */
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import 'rxjs';
import {Injectable} from '@angular/core';
import {Image} from './Image';
import {User} from './User';
import {Observable} from "rxjs";

@Injectable()
export class DataService {
  users: User[];
  constructor(private db: AngularFireDatabase) {
    this.getUsers();
  }
  getNameFromUid(uid: string) {
    const users: User[] = this.users;
    for (const user of users) {
      if (user.uid === uid) {
        return user.displayname;
      }
    }
    return 'name not found';
  }
  getImages() {
    // const images = [];
    return this.db.list('/images');
    // return images;
  }

  getImageBitString(id: number) {
    return this.db.list('/images/' + id + '/bitstring');
  }

  getUsers() {
    const users = [];
    this.db.list('/users').valueChanges().subscribe(data => {
      console.log('NEW USER DATA');
      for (const user of data) {
        users.push(User.fromJson(user));
      }
    });
    this.users = users;
  }
  getDb() {
    return this.db;
  }
  deleteImage(id: number) {
    return this.db.list('/images/' + id).remove();
  }
  shareImage(id: number) {

  }

  uploadImage(title, description, source) {
    const image = {
      comments: [],
      sharedwith: [],
      title: title,
      description: description,
      bitstring: source,
    };
    return this.db.list('/images').push(image);
  }
}
