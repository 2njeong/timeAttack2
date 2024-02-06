import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { titleTodo, renewTitle } from "../redux/modules/title";
import { bodyTodo, renewBody } from "../redux/modules/body";
import { addTodo } from "../redux/modules/todos";
import Todolist from "../components/todolist";

const Home = () => {
  const dispatch = useDispatch();

  const title = useSelector((state) => state.setTitle.title);
  const body = useSelector((state) => state.setBody.body);
  const todolist = useSelector((state) => state.todos.todolist);

  const isActive = true;
  return (
    <>
      <header></header>
      <main>
        <input
          value={title}
          onChange={(e) => {
            dispatch(titleTodo(e.target.value));
          }}
        ></input>
        <input
          value={body}
          onChange={(e) => dispatch(bodyTodo(e.target.value))}
        ></input>
        <button
          onClick={() => {
            dispatch(addTodo({ title, body }));
            dispatch(renewTitle());
            dispatch(renewBody());
          }}
        >
          Submit
        </button>
        <div>
          Todolist
          <br />
          {todolist
            .filter((todo) => todo.isDone === false)
            .map((todo) => (
              <Todolist key={todo.id} todo={todo} isActive={isActive} />
            ))}
        </div>
        <div>
          Donelist <br />
          {todolist
            .filter((todo) => todo.isDone === true)
            .map((todo) => (
              <Todolist key={todo.id} todo={todo} />
            ))}
        </div>
      </main>
      <footer></footer>
    </>
  );
};

export default Home;
