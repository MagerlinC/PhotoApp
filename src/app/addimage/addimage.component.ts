import { Component, OnInit } from '@angular/core';
import {DataService} from "../DataService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addimage',
  templateUrl: './addimage.component.html',
  styleUrls: ['./addimage.component.scss']
})
export class AddimageComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  uploadImage(title, description, source) {
    this.dataService.uploadImage(title, description, source);
    this.router.navigate(['/images']);
  }
}
