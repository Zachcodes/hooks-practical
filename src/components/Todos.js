import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Todo from './Todo';

// Step 1

// const Todos = () => {
//   const [todos, setTodos] = useState([]);
//   useEffect(() => {
//     async function getTodos() {
//       const { data } = await axios.get('/api/todos');
//       setTodos(data);
//     }
//     getTodos();
//   }, []);
//   console.log('todos', todos);
//   return (
//     <div>
//       {todos.map(t => (
//         <div key={t.id}>{t.todo}</div>
//       ))}
//     </div>
//   );
// };

export default function Todos() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    async function getTodos() {
      const { data } = await axios.get('/api/todos');
      setTodos(data);
    }
    getTodos();
  }, []);

  // Step 2
  async function updateTodo(id, newVal) {
    let { data } = await axios.put(`/api/todos/${id}`, { newVal });
    setTodos(data);
  }

  return (
    <div>
      {todos.map(t => (
        <Todo key={t.id} {...t} updateTodo={updateTodo} />
      ))}
    </div>
  );
}
