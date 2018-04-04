import { Component, OnInit } from '@angular/core';
import {DataService} from "../DataService";

@Component({
  selector: 'app-addimage',
  templateUrl: './addimage.component.html',
  styleUrls: ['./addimage.component.scss']
})
export class AddimageComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  uploadImage(title, description, source) {
    this.dataService.uploadImage(title, description, source);
  }
}
