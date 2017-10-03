// This is used only for the initial rendering to determine if
// certain elements should be displayed or not. Since we immediately fetch
// user data after the initial render, all important user-related tasks
// are done safely based on that data and in the server.
export function isAuthenticated () {
  return !!~document.cookie.indexOf('uid=');
}
