import {
  RECEIVE_USER,
  ADD_USER_ATTENDANCE,
  REMOVE_USER_ATTENDANCE
} from '../actionTypes';

export function receiveUser (user) {
  return {
    type: RECEIVE_USER,
    user
  };
}

export function addUserAttendance (businessId) {
  return {
    type: ADD_USER_ATTENDANCE,
    businessId
  };
}

export function removeUserAttendance (businessId) {
  return {
    type: REMOVE_USER_ATTENDANCE,
    businessId
  };
}

export default function reducer (user = null, action) {
  switch (action.type) {
    case RECEIVE_USER:
      return action.user;
    case ADD_USER_ATTENDANCE:
      return {
        ...user,
        attendance: [
          ...user.attendance,
          action.businessId
        ]
      };
    case REMOVE_USER_ATTENDANCE:
      return {
        ...user,
        attendance: [
          ...user.attendance.slice(0, user.attendance.indexOf(action.businessId)),
          ...user.attendance.slice(user.attendance.indexOf(action.businessId) + 1)
        ]
      };
    default:
      return user;
  }
}
