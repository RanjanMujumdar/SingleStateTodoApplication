import React from 'react';

function AppendTodoItems(props) {
return (
<div>
    <h1>ToDo application</h1>
    {props.todoList.map((todo, index) => (
    <div key={index}>
        <h3>{todo.Title}</h3>
        <p>{todo.Description}</p>
        <input type="checkbox" checked={todo.IsCompleted} />
    </div>
    ))}
</div>
);
}

export default AppendTodoItems;
