import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {TodoList, ITodo} from './components';

const todoItems : ITodo[] = [
    {id: 0, isDone: false, text: 'yolo0'},
    {id: 1, isDone: false, text: 'yolo1'},
    {id: 2, isDone: false, text: 'yolo2'},
    {id: 3, isDone: false, text: 'yolo3'}
];

ReactDOM.render(<TodoList todos={todoItems} />, document.getElementById('root'));