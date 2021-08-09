import { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");

  const [incompleteTodos, setIncompleteTodos] = useState([
    "ああああ",
    "いいいい"
  ]);

  const [completeTodos, setCompleteTodos] = useState(["うううう"]);

  const onChangeText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    // ...incompleteTodosで現在incompleteTodosの配列の中身を全て入れられる
    // todoTextの内容を後ろに追加
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    // 入力した内容を初期化
    setTodoText("");
  };

  const onclickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    // splice(何番目の要素から, いくつ削除する)
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              // Reactでは仮想DOMが裏で差分を見ているので、ループのときは
              // returnの親要素にkeyを設定する
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button onClick={() => onclickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {completeTodos.map((completeTodo) => {
            return (
              <div key={completeTodo} className="list-row">
                <li>{completeTodo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
