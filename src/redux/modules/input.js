const INPUT = "input";

export const newInput = (payload) => {
  return {
    type: INPUT,
    payload,
  };
};

const initialState = {
  input: "",
};

export const input = (state = initialState, action) => {
  switch (action.type) {
    case INPUT:
      return {
        input: action.payload,
      };
    default:
      return state;
  }
};
