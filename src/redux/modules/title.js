const TITLE_INPUT = "title/TITLE_INPUT";

export const titleTodo = (payload) => {
  return {
    type: TITLE_INPUT,
    payload,
  };
};

const initialState = {
  title: "",
};

export const setTitle = (state = initialState, action) => {
  switch (action.type) {
    case TITLE_INPUT:
      return {
        title: action.payload,
      };
    default:
      return state;
  }
};
