import React, { useState} from 'react'

export default function Todos(props) {
    const [task, setTask] = useState("");

    const valueHandler= e =>
    {
        setTask(e.target.value);
    }
      
    const submitHandler = ()=>
    {
        props.sendtodoList(task);
        setTask("");
    }

    return (
        <div className='add-todos'>
        <div className='todo-container'>
        
                <input type="text" name="todo" value={task} onChange={valueHandler}/>
                <button  className='submit-todo' onClick={submitHandler}>Add</button>
                <div className='alert'>{props.alert}</div>
            
        </div>
        </div>
    )
}
