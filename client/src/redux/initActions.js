import { receiveUser } from './user';
import { fetchBusinesses } from './businesses';

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
