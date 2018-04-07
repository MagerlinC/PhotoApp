/**
 * Created by mac on 02/04/2018.
 */

export class Image {
  static fromJson(json: any): Image {
    return new Image(
      json.id,
      json.uploader,
      json.title,
      json.timestamp,
      json.bitstring,
      json.comments,
      json.sharedwith,
      json.description);
  }
  constructor(private id: number, public uploader: string, private title: string, private timestamp: string, private bitstring: string,
              private comments: any[], public sharedwith: any[], private description: string) {
  }
}
