import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { titleTodo } from "../redux/modules/title";
import { bodyTodo } from "../redux/modules/body";
import { addTodo, switchTodo } from "../redux/modules/todos";
const Home = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.setTitle.title);
  const body = useSelector((state) => state.setBody.body);
  const todolist = useSelector((state) => state.todos.todolist);
  return (
    <>
      <header></header>
      <main>
        <input
          defaultValue={title}
          onChange={(e) => dispatch(titleTodo(e.target.value))}
        ></input>
        <input
          defaultValue={body}
          onChange={(e) => dispatch(bodyTodo(e.target.value))}
        ></input>
        <button onClick={() => dispatch(addTodo({ title, body }))}>
          Submit
        </button>
        <div>
          Todolist
          <br />
          {todolist.map((todo) => {
            return (
              <div key={todo.id}>
                <div>
                  <p>Title: {todo.title}</p>
                  <p>Todo: {todo.body}</p>
                </div>
                <button onClick={() => dispatch(switchTodo(todo.id))}>
                  완료
                </button>
                <button>삭제</button>
                <button>상세보기</button>
              </div>
            );
          })}
        </div>
        <div>
          Donelist <br />
          {todolist.filter((todo) => todo.isDone === true)}
        </div>
      </main>
      <footer></footer>
    </>
  );
};

export default Home;
