import _reduce from 'lodash/reduce';

// Return an array of business Ids extracted from business objects
export function getBusinessIds (businesses) {
  return _reduce(businesses, (ids, business) => {
    return [...ids, business.id];
  }, []);
}

// Convert an attendance array of objects to an object of objects
// with businessIds as keys and attendance count as values
export function objectifyAttendance (attendance) {
  return _reduce(attendance, (obj, business) => {
    return {
      ...obj,
      [business.businessId]: business.attending
    };
  }, {});
}
