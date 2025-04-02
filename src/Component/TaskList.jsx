import React from 'react'
import TaskItem from './TaskItem'

export default function TaskList({tasks,complete,Delete}) {
    
  return (
    <>
    <div className='task-list'>
        {tasks.length === 0 ? <p className='no-tasks'>No tasks yet !</p>:null}
        {tasks.map((task)=>(
            <TaskItem key={task.id} task={task} complete={complete} Delete={Delete}/>
            
        ))}
    </div>

    </>

  )
}
