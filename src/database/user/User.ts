export enum Sex {
  /** 男 */
  MALE = 0,
  /** 女 */
  FEMALE = 1,
}

export interface User {
  username: string;
  age: number;
  sex: Sex;
}
