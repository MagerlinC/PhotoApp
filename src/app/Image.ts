import {Share} from "./Share";
import {Comment} from './Comment';
/**
 * Created by mac on 02/04/2018.
 */

export class Image {
  static fromJson(json: any): Image {
    return new Image(
      json.uploader,
      json.title,
      json.timestamp,
      json.bitstring,
      json.comments,
      json.sharedwith);
  }
  constructor(private uploader: string, private title: string, private timestamp: string, private bitstring: string,
              private comments: any[], private sharedwith: any[]) {
  }
}