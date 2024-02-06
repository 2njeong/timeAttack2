const BODY_INPUT = "body/BODY_INPUT";

export const bodyTodo = (payload) => {
  return {
    type: BODY_INPUT,
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
    default:
      return state;
  }
};
