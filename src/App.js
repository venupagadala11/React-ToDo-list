import './App.css';
import React, { useState } from 'react';
import Todos from './components/Todos';
import Display from './components/Display';


function App() {
  const [todoList, setTodoList] = useState([]);
  const [alert, setAlert] = useState("")

  const getTodoList = (todo) =>
  {
    if(todo!=="")
    {
      setTodoList([...todoList, todo]); 
      setAlert("")
    }
    else
      setAlert("please enter your ToDo")
  }

  const dleleteHandler= (index)=>
  {
    const newdata = (todoList.filter((task,i)=> index!==i));
    setTodoList(newdata);
  }

  return (
    <div className="App">
      <h1>To Do Application</h1>
      <Todos sendtodoList={getTodoList} alert={alert}/>
      <Display todolist={todoList} deleteHandler={dleleteHandler}/>
      
    </div>
  );
}

export default App;
