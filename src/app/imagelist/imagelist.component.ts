import { Component, OnInit } from '@angular/core';
import {Image} from "../Image";
import {DataService} from "../DataService";

@Component({
  selector: 'app-imagelist',
  templateUrl: './imagelist.component.html',
  styleUrls: ['./imagelist.component.scss']
})
export class ImagelistComponent implements OnInit {

  images;

  constructor(private dataService: DataService) {
    this.dataService.getImages().valueChanges().subscribe( (data) => {
      this.images = data;
    });
  }

  ngOnInit() {
  }

}
