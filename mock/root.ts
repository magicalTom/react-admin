export const root = <T>(p: T, msg: string = null) => ({
  code: '00',
  data: p,
  msg,
});
