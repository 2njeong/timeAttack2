import React from "react";
import { useDispatch } from "react-redux";
import { switchTodo, deleteTodo } from "../redux/modules/todos";
import { useNavigate } from "react-router-dom";

function Todolist({ todo, isActive }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div key={todo.id}>
      <div>
        <p>Title: {todo.title}</p>
        <p>Todo: {todo.body}</p>
      </div>
      {isActive ? (
        <button onClick={() => dispatch(switchTodo(todo.id))}>완료</button>
      ) : (
        <button>취소</button>
      )}
      <button onClick={() => dispatch(deleteTodo(todo.id))}>삭제</button>
      <button onClick={() => navigate(`/detail/${todo.id}`)}>상세보기</button>
    </div>
  );
}

export default Todolist;
