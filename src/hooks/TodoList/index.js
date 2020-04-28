import React, { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [currentTodo, setCurrentTodo] = useState('');
    
    const handleChange = (event) => setCurrentTodo(event.target.value || '');
    const addTodo = () => {
        prevTodos.push(currentTodo);
        setCurrentTodo('');
    }

    return <div className="container">
        <h2>Todos</h2>
        <input onChange={handleChange} value={currentTodo} />
        <button onClick={this.addTodo}>Add Todo</button>
        <ul>
            {todos.map(item => <li key={Math.random()}>{item}</li>)}
        </ul>
    </div>
}

export default TodoList;