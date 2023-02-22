import React from 'react'

export default function Display({todolist,deleteHandler}) {
  return (
    <div>
      <div className='display-todo'>
        <h3>ToDo list : </h3>
        {todolist.map((task,index) => 
        (<div key={index}>
          <p>{index+1} . {task} <button className='delete-todo' onClick={() => deleteHandler(index)}>Delete</button></p>
          </div> ))}
      </div>
    </div>
  )
} 


