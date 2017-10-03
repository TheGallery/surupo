import { receiveUser } from './user';
import { fetchBusinesses } from './businesses';

// This could probably go inside the user duck since attendance and location
// have their fetch functions in their corresponding ducks as well. I blame bad
// design.
export default function fetchInit () {
  return function (dispatch) {
    fetch('/api/users/me', {
      credentials: 'include'
    })
    .then(res => res.json())
    .then(user => {
      dispatch(receiveUser(user));

      if (user && user.location) {
        dispatch(fetchBusinesses(user.location));
      }
    });
  };
}
