import React, { useState } from 'react';

// Step 1

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Todo from './Todo';

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
//         <Todo key={t.id} {...t} />
//       ))}
//     </div>
//   );
// };

// export default Todos;

// Step 2

// import React, { useState } from 'react';

// const Todo = ({ todo, id }) => {
//   const [editing, setEdit] = useState(false);
//   const [val, updateVal] = useState(todo);
//   return (
//     <div>
//       {editing ? (
//         <span>
//           <input onChange={e => updateVal(e.target.value)} value={val} />
//           <button
//             onClick={() => {
//               setEdit(false);
//               updateVal(todo);
//             }}
//           >
//             Cancel
//           </button>
//         </span>
//       ) : (
//         <span>
//           {todo}
//           <button onClick={() => setEdit(true)}>Edit</button>
//         </span>
//       )}
//     </div>
//   );
// };

// export default Todo;

// step 3

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
