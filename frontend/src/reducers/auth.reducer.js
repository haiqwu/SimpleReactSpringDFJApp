import { TYPE_LOGIN } from '../actions/auth.action';
import { TYPE_LOGOUT } from '../actions/logout.action';

export const authReducer = (state = null, action) => {
  switch (action.type) {
    case TYPE_LOGIN:
      if (action.payload.success) {
        return action.payload.user;
      }
      return state;
    case TYPE_LOGOUT:
      return null;
    default:
      return state;
  }
};
