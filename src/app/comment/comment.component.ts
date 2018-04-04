import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../DataService";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() contents;
  @Input() timestamp;
  @Input() user;
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }
  dateTimeFromMillis(millis) {
    return new Date(millis);
  }
}
