import { useEffect, useState } from "react";

type TodoType = {
  id: string;
  text: string;
};
const TodoList = () => {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState<TodoType[]>([]);

  const postTodo = () => {
    fetch(
      "https://vkcopy-2b9fe-default-rtdb.asia-southeast1.firebasedatabase.app/todos.json",
      {
        method: "POST",
        body: JSON.stringify({
          text: todoText,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      console.log(res);
      setTodoText("");
      getTodos();
    });
  };

  const getTodos = () => {
    fetch(
      "https://vkcopy-2b9fe-default-rtdb.asia-southeast1.firebasedatabase.app/todos.json"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const result = [];
        for (const key in data) {
          result.push({ id: key, text: data[key].text });
        }
        setTodoList(result);
      });
  };
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <h1>Todo</h1>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={postTodo} disabled={!todoText}>
        POST
      </button>
      <ul>
        {todoList.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
