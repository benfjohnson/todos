import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface ITodo {
    id: number,
    isDone: boolean,
    text: string
};

const Todo = (todo : ITodo) => todo.isDone ? <span>{todo.text}</span> : <span>{todo.text}</span>;

const TodoList = ({todos} : {todos: ITodo[]}) => {
    return (
        <div className="todo">
            <input type="text" placeholder="Add todo" />
            <ul className="todo-list">
                {todos.map((t : ITodo) => (
                    <li key={t.id} className="todo-item">
                        <Todo {...t} />
                    </li>
                ))}
            </ul>
        </div>
    )
};

export {TodoList, ITodo};