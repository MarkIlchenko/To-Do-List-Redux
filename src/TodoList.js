
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css'

import { addTask, removeTask, toggleTask } from './Action';

const TodoList = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);
    
    const handleAddTask = () => {
        if (inputValue !== '') {
            dispatch(addTask(inputValue));
            setInputValue('');
        }
    };
    
    // function to remove a task
    const handleRemoveTask = id => {
        dispatch(removeTask(id));
    };
    
    const handleToggleTask = id => {
        dispatch(toggleTask(id));
    };
    
    return (
         <div className="App-header">
             <ul>
                 {tasks.map(task => (
                      <li
                           key={task.id}
                           onClick={() => handleToggleTask(task.id)}
                           style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                      >
                          {task.title}
                          <button onClick={() => handleRemoveTask(task.id)}>x</button>
                      </li>
                 ))}
             </ul>
             <div>
                 <input
                      type="text"
                      value={inputValue}
                      onChange={e => setInputValue(e.target.value)}
                 />
                 <button onClick={handleAddTask}>Add Task</button>
             </div>
         </div>
    );
};

export default TodoList;
