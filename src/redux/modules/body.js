const BODY_INPUT = "body/BODY_INPUT";
const RENEW_BODY = "BODY/RENEW_BODY";

export const bodyTodo = (payload) => {
  return {
    type: BODY_INPUT,
    payload,
  };
};

export const renewBody = (payload) => {
  return {
    type: RENEW_BODY,
    payload,
  };
};

const initialState = {
  body: "",
};

export const setBody = (state = initialState, action) => {
  switch (action.type) {
    case BODY_INPUT:
      return {
        body: action.payload,
      };
    case RENEW_BODY:
      return {
        body: "",
      };
    default:
      return state;
  }
};
