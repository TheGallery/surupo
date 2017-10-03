export function isAuthenticated () {
  return !!~document.cookie.indexOf('uid=');
}
