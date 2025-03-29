type Urls =
  | '/home/connect-people'
  | '/home/profile'
  | 'home/emilys'
  | 'home/michaelw'
  | 'home/sophiab';

export function isHeaderHidden(pathname: string, urls: Urls[]) {
  return urls.some((url) => pathname.includes(url));
}
