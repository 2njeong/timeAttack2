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

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const switchTodo = (payload) => {
  return {
    type: SWITCH_TODO,
    payload,
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

    case DELETE_TODO:
      const restList = state.todolist.filter(
        (todo) => todo.id !== action.payload
      );
      return {
        ...state,
        todolist: restList,
      };

    case SWITCH_TODO:
      const foundTodo = state.todolist.find(
        (todo) => todo.id === action.payload
      );
      const doneTodoList = state.todolist.filter(
        (todo) => todo.id !== foundTodo.id
      );
      return {
        ...state,
        todolist: [...doneTodoList, { ...foundTodo, isDone: true }],
      };

    default:
      return state;
  }
};

export default todos;
