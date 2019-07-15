import axios from 'axios';
import { SERVER_URL } from '../env';

export const TYPE_LOGOUT = 'LOGOUT';

export const dispatchLogoutAction = () => {
  const logoutPromise = axios.get(
    `${SERVER_URL}/logout`,
    { withCredentials: true },
  )
    .then((res) => {
      if (res.data.success) {
        return {
          success: true,
        };
      }
      return {
        success: false,
      };
    }).catch((err) => {
      console.log('error in logout', err);
    });

  return {
    type: TYPE_LOGOUT,
    payload: logoutPromise,
  };
};
