/**
 * Created by mac on 02/04/2018.
 */
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import 'rxjs';
import {Injectable} from '@angular/core';
import {Image} from './Image';
import {User} from './User';
import {Observable} from 'rxjs';
import {UserService} from './UserService';

@Injectable()
export class DataService {
  users: User[];
  constructor(private db: AngularFireDatabase, private userService: UserService) {
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
    return this.db.list('/images');
  }

  async getMyImages() {
    const images = [];
    await this.getImages().valueChanges().subscribe(data => {
      for (const img of data) {
        const image = Image.fromJson(img);
        if (image.uploader === this.userService.getCurrentUserUid()) {
          images.push(image);
        } else {
          for (const share of image.sharedwith) {
            if (share.user === this.userService.getCurrentUserUid()) {
              images.push(image);
            }
          }
        }
      }
    });
    return images;
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
    alert('deleting img: ' + id);
    return this.db.list('/images/' + id).remove();
  }
  async shareImage(targetName: string, id: number) {
    let existingShares = [];
    await this.getSharesForImage(id).then(res => {
      existingShares = res;
    });
    const addition = {'dateshared': Date.now(), 'user': targetName};
    console.log('BEFORE');
    console.log(existingShares);
    existingShares.push(addition);
    console.log('AFTER');
    console.log(existingShares);
    this.db.list('/images/').update(id.toString(), {'sharedwith': existingShares});
  }

  async getSharesForImage(id: number) {
    let sharedwith = [];
    await this.db.list('/images/' + id).valueChanges().subscribe( data => {
      sharedwith = Image.fromJson(data).sharedwith;
    });
    return sharedwith;
  }

  getImageById(id: number) {
    return this.db.list('/images/' + id);
  }
  async getNextImageId() {
    let image;
    await this.getImages().valueChanges().subscribe( (data) => {
      image = data;
    });
    alert(image.length);
    return image.length;
  }

  createGuid() {
    return '';
  }

  uploadImage(title, description, source) {
    const uid: string = this.userService.getCurrentUserUid();
    let id;
    this.getNextImageId().then( res => {
      id = res;
    });
    const image = {
      id: id,
      comments: [],
      timestamp: Date.now(),
      sharedwith: [],
      uploader: uid,
      title: title,
      description: description,
      bitstring: source,
    };
    return this.db.list('/images/' + id + '/').push(image);
  }
}
