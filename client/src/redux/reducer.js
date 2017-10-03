import { combineReducers } from 'redux';

import user from './user';
import attendance from './attendance';
import businesses from './businesses';

const reducer = combineReducers({
  user,
  businesses,
  attendance
});

export default reducer;
