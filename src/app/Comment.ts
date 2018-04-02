/**
 * Created by mac on 02/04/2018.
 */
export class Comment {
  static fromJson(json: any): Comment {
    return new Comment(
      json.contents,
      json.timestamp,
      json.user);
  }
  constructor(private contents: string, timestamp: string, user: string) {
  }
}
