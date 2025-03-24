type Urls = '/home/connect-people' | '/home/profile';

export function isHeaderHidden(pathname: string, urls: Urls[]) {
  return urls.some((url) => pathname.includes(url));
}
