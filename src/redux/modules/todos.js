// import uuid from "react-uuid";
import shortid from "shortid";

const ADD_TODO = "todo/ADD_TODO";
const DELETE_TODO = "todo/DELETE_TODO";
const SWITCH_TODO = "todo/SWITCH_TODO";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = () => {
  return {
    type: DELETE_TODO,
  };
};

export const switchTodo = () => {
  return {
    type: SWITCH_TODO,
  };
};

const initialState = {
  todolist: [],
};

// 리듀서
export const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { title, body } = action.payload;
      const newTodo = {
        id: shortid.generate(),
        title: title,
        body: body,
        isDone: false,
      };
      return {
        ...state,
        todolist: [...state.todolist, newTodo],
      }; //TODO: 여기 작성

    // case DELETE_TODO:
    //   return; //TODO: 여기 작성

    case SWITCH_TODO:
      const foundTodo = state.todolist.find(
        (todo) => todo.id === action.payload
      );
      return {
        ...foundTodo,
        isDone: true,
      };

    default:
      return state;
  }
};

export default todos;
