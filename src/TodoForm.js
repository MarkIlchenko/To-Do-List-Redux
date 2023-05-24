// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
//
// function TodoForm() {
//     const [text, setText] = useState('');
//     const dispatch = useDispatch();
//
//     function handleSubmit(e) {
//         e.preventDefault();
//         if (text.trim()) {
//             dispatch({
//                 type: 'ADD_TODO',
//                 payload: { id: Date.now(), text } // Додаємо нову задачу з унікальним id
//             });
//             setText('');
//         }
//     }
//
//     return (
//          <form onSubmit={handleSubmit}>
//              <input type="text" value={text} onChange={e => setText(e.target.value)} />
//              <button type="submit">Add</button>
//          </form>
//     );
// }
//
// export default TodoForm;
