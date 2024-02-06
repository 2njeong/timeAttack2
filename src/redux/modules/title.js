const TITLE_INPUT = "title/TITLE_INPUT";
const RENEW_TITLE = "title/RENEW_TITLE";

export const titleTodo = (payload) => {
  return {
    type: TITLE_INPUT,
    payload,
  };
};

export const renewTitle = (payload) => {
  return {
    type: RENEW_TITLE,
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
    case RENEW_TITLE:
      return {
        title: "",
      };
    default:
      return state;
  }
};
