import axios from 'axios';
import { SERVER_URL } from '../env';

export const TYPE_GET_PARTS = 'GET_PARTS';
export const TYPE_ADD_PART = 'ADD_PART';

export const dispatchGetPartsAction = () => {
  const getPartsPromise = axios.get(`${SERVER_URL}/parts`, { withCredentials: true });
  return {
    type: TYPE_GET_PARTS,
    payload: getPartsPromise,
  };
};

export const dispatchAddPartAction = (part, successCB, failCB) => {
  const promise = axios.post(`${SERVER_URL}/parts`, part, {withCredentials: true})
    .then((res) => {
      if (res.data.success) {
        successCB(res);
        return {
          success: true,
          part,
        };
      }
      throw res.data.message;
    })
    .catch((err) => {
      failCB(err);
      return {
        success: false,
      };
    });
  return {
    type: TYPE_ADD_PART,
    payload: promise,
  };
};
