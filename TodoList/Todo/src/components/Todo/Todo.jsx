
import React, { useState } from 'react';

function TodoList() {
 const [todos, setTodos] = useState([]);
 const [currentTodo, setCurrentTodo] = useState('');

 const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, currentTodo]);
    setCurrentTodo('');
 };

 const deleteTodo = (index) => {
   const newTodos =  [...todos]
    newTodos.splice(index, 1);
    setTodos( newTodos);
 };

 return (
    <div className="container">
      <h1>Todo List</h1>
      <form >
        <input
          type="text"
          name="currentTodo"
          value={currentTodo}
          onChange={(e) => setCurrentTodo(e.target.value)}
        />
        <button onClick={addTodo} type="submit">Add</button>
      </form>
      <ul>
        {todos && todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
 );
}

export default TodoList;