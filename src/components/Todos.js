import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Todo from './Todo';

export default function Todos() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get('/api/todos').then(res => setTodos(res.data));
  }, []);

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
