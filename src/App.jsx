import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppendTodoItems from './AppendTodoItems'

function App() {
  let display = false
  const [TodoList, setTodoList] = useState([])
  const [TodoObject, setTodoObject] = useState({
    Title:"",
    Description:"",
    IsCompleted: false
  })

  function createTodoObject(event) {
    const { name, value, IsCompleted, checked } = event.target;
    
    //console.log(name)
    // Update the state based on the input field's name
    setTodoObject(prevState => ({
      ...prevState,
      [name]: IsCompleted === 'checkbox' ? checked : value
    }));
  }
  

  function TodoListvalue(){
    setTodoList([...TodoList, TodoObject])
    setTodoObject({
      Title: '',
      Description: '',
      IsCompleted: false
    });
  }

  return (
    <div>
      <input type='text' placeholder='Title' name='Title' value={TodoObject.Title} onChange={createTodoObject}></input>
      <input type='text' placeholder='Description' name='Description' value={TodoObject.Description} onChange={createTodoObject}></input>
      <input type='checkbox' placeholder='IsCompleted' name='IsCompleted' checked={TodoObject.IsCompleted} onChange={createTodoObject} ></input>
      <button id='clickButton' onClick={TodoListvalue} >Add list</button>
      { TodoList.length > 0 && <AppendTodoItems todoList={TodoList} />}
    </div>
  )
}

export default App
