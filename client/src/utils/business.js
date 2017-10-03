import _reduce from 'lodash/reduce';

export function getBusinessIds (businesses) {
  return _reduce(businesses, (ids, business) => {
    return [...ids, business.id];
  }, []);
}

export function objectifyAttendance (attendance) {
  return _reduce(attendance, (obj, business) => {
    return {
      ...obj,
      [business.businessId]: business.attending
    };
  }, {});
}
