import { RECEIVE_ATTENDANCE } from '../actionTypes';
import { getBusinessIds, objectifyAttendance } from '../../utils/business';
import { addUserAttendance, removeUserAttendance } from '../user';

export function receiveAttendance (attendance, isUpdate) {
  return {
    type: RECEIVE_ATTENDANCE,
    isUpdate,
    attendance
  };
}

export function fetchAttendance (businesses) {
  return function (dispatch) {
    fetch('/api/attendance/getAll', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        businessIds: getBusinessIds(businesses)
      })
    }).then(res => {
      if (res.status >= 200 && res.status < 300) {
        return res.json();
      } else {
        return res.json().then(Promise.reject.bind(Promise));
      }
    }).then(attendance => {
      dispatch(receiveAttendance(attendance));
    }).catch(err => {
      console.log('Server error.');
    });
  };
}

export function addAttendance (businessId) {
  return function (dispatch) {
    fetch('/api/attendance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        businessId
      })
    }).then(res => {
      if (res.status >= 200 && res.status < 300) {
        return res.json();
      } else {
        return res.json().then(Promise.reject.bind(Promise));
      }
    }).then(attendance => {
      dispatch(receiveAttendance(attendance, true));
      dispatch(addUserAttendance(businessId));
    }).catch(err => {
      console.log('Server error.');
    });
  };
}

export function removeAttendance (businessId) {
  return function (dispatch) {
    fetch('/api/attendance', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({ businessId })
    }).then(res => {
      if (res.status >= 200 && res.status < 300) {
        return res.json();
      } else {
        return res.json().then(Promise.reject.bind(Promise));
      }
    }).then(attendance => {
      dispatch(receiveAttendance(attendance, true));
      dispatch(removeUserAttendance(businessId));
    }).catch(err => {
      console.log('Server error.');
    });
  };
}

export default function reducer (attendance = {}, action) {
  switch (action.type) {
    case RECEIVE_ATTENDANCE:
      if (action.isUpdate) {
        return {
          ...attendance,
          [action.attendance.businessId]: action.attendance.attending
        };
      } else {
        return {
          ...objectifyAttendance(action.attendance)
        };
      }
    default:
      return attendance;
  }
}
