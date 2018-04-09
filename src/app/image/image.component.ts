import {Component, Input, OnInit} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {DataService} from "../DataService";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() id;
  @Input() title;
  @Input() comments;
  @Input() timestamp;
  @Input() sharedwith;
  @Input() uploader;
  @Input() bitstring;
  @Input() description;
  displayShare = false;

  constructor(private dataService: DataService, private domSanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }

  dateTimeFromMillis(millis) {
    return new Date(millis);
  }
  getNameFromUid(uid: string) {
    return this.dataService.getNameFromUid(uid);
  }
  deleteImage() {
    this.dataService.deleteImage(this.id);
  }
  shareImage(targetName) {
    this.dataService.shareImage(targetName, this.id);
  }

  toggleDisplayShare() {
    this.displayShare = true;
  }
}
