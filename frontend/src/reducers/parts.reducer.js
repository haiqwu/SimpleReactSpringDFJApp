import { TYPE_ADD_PART, TYPE_GET_PARTS } from '../actions/parts.action';

export const partsReducer = (state = null, action) => {
  switch (action.type) {
    case TYPE_ADD_PART:
      // action.payload: {success: boolean, part?}
      if (action.payload.success && state && state !== []) {
        return [...state, action.payload.part];
      }
      return state;

    case TYPE_GET_PARTS:
      // console.log(action.payload);
      return action.payload.data;

    default:
      return state;
  }
};
