import qs from 'qs';
import axios from 'axios';
import { SERVER_URL } from '../env';

export const TYPE_LOGIN = 'LOGIN';

export const dispatchLoginAction = (user, successCB, failCB) => {
  const loginPromise = axios.post(
    `${SERVER_URL}/login`, qs.stringify(user), { withCredentials: true },
  ).then((res) => {
    if (res.data.success) {
      successCB(res);
      return {
        success: true,
        user: res.data.user,
      };
    }
    failCB(res.data.message);
    return {
      success: false,
    };
  }).catch((err) => {
    failCB(err);
    return {
      success: false,
    };
  });
  return {
    type: TYPE_LOGIN,
    payload: loginPromise,
  };
};
