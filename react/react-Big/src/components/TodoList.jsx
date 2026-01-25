import React, { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim()) {
      setTodo([...todo, inputValue]);
      setInputValue("");
    }
  };

  const handleChange = e => {
    setInputValue(e.target.value)
  }

  return (
    <div>
      <h1>To Do List</h1>
      <form action="To do" onSubmit={handlesubmit}>
        <input type="text" value={inputValue} onChange={handleChange} placeholder="Add a new Todo" />
        <button type="submit">Add todo</button>
      </form>

      <ol>
        {todo.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
