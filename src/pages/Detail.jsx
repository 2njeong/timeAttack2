import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();
  console.log(params);
  const todolist = useSelector((state) => state.todos.todolist);
  console.log(todolist);

  const foundTodo = todolist.find((todo) => todo.id === params.id);

  return (
    <div>
      <div>
        <p>Title: {foundTodo.title}</p>
        <p>Todo: {foundTodo.body}</p>
      </div>
    </div>
  );
};

export default Detail;
