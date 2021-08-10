import React from "react";

export const CompleteTodos = (props) => {
  const { compTodos, onClickReturnTodo } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {compTodos.map((completeTodo, index) => {
          return (
            <div key={completeTodo} className="list-row">
              <li>{completeTodo}</li>
              <button onClick={() => onClickReturnTodo(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
