import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ToDoList from './ToDoList/ToDoList';

ReactDOM.render(
    <div>

        <App />
        <ToDoList />
    </div>, document.getElementById('root'));

registerServiceWorker();




