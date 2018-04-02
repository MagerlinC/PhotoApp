/**
 * Created by mac on 02/04/2018.
 */
export class Share {
  static fromJson(json: any): Share {
    return new Share(
      json.dateshared,
      json.user);
  }
  constructor(private dateshared: string, user: string) {
  }
}
