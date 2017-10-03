import { REQUEST_BUSINESSES, RECEIVE_BUSINESSES } from '../actionTypes';

import { fetchAttendance } from '../attendance';

export function fetchBusinesses (location) {
  return function (dispatch) {
    dispatch(requestBusinesses());

    return fetch(`/api/location?location=${location}`, {
      credentials: 'include'
    })
    .then(res => res.json())
    .then(businesses => {
      dispatch(receiveBusinesses(location, businesses));
      dispatch(fetchAttendance(businesses));
    })
    .catch(err => {
      console.log('Error: ' + err);
    });
  };
}

function requestBusinesses () {
  return {
    type: REQUEST_BUSINESSES
  };
}

function receiveBusinesses (location, businesses) {
  return {
    type: RECEIVE_BUSINESSES,
    location,
    businesses
  };
}

export default function reducer (businesses = {}, action) {
  switch (action.type) {
    case REQUEST_BUSINESSES:
      return {
        ...businesses,
        fetching: true
      };
    case RECEIVE_BUSINESSES:
      return {
        ...businesses,
        fetching: false,
        location: action.location,
        businesses: action.businesses
      };
    default:
      return businesses;
  }
}
