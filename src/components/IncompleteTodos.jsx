import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onclickComplete, onclickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            // Reactでは仮想DOMが裏で差分を見ているので、ループのときは
            // returnの親要素にkeyを設定する
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onclickComplete(index)}>完了</button>
              <button onClick={() => onclickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
