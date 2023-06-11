export default interface RootObject<T> {
  code: string;
  data: T;
  msg: string | null;
}
