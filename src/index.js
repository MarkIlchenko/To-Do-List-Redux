import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TodoList from "./TodoList";
import todoReducer from "./store";
const store = createStore(todoReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <TodoList />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
