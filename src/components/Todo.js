import React, { useState } from 'react';

export default function Todo({ todo, id, updateTodo }) {
  const [editing, setEdit] = useState(false);
  const [val, updateVal] = useState(todo);
  return (
    <div>
      {editing ? (
        <span>
          <input onChange={e => updateVal(e.target.value)} value={val} />
          <button onClick={() => setEdit(false)}>Cancel</button>
          <button
            onClick={() => {
              updateTodo(id, val);
              setEdit(false);
            }}
          >
            Save Todo
          </button>
        </span>
      ) : (
        <span>
          {todo}
          <button onClick={() => setEdit(true)}>Edit</button>
        </span>
      )}
    </div>
  );
}
