import { Component, OnInit } from '@angular/core';
import {Image} from "../Image";
import {DataService} from "../DataService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-imagelist',
  templateUrl: './imagelist.component.html',
  styleUrls: ['./imagelist.component.scss']
})
export class ImagelistComponent implements OnInit {

  images: Image[];

  constructor(private dataService: DataService, private router: Router) {
    this.dataService.getMyImages().then( res => {
      this.images = res;
    });
  }

  ngOnInit() {
  }
  goToAddImage() {
    this.router.navigate(['/addimage']);
  }


}
