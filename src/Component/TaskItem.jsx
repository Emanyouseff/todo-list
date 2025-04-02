import React from 'react'

export default function TaskItem({task ,complete,Delete}) {

    
  return (<>
  <div className={`task-item  ${task.completed?"completed" :''} `}>
 <div>
<div className='task-name'>
<p className='task-text'> <strong className='font-text'>{task.text}</strong></p>
 <div className=' task-action'>
  <button className='complete-btn' onClick={()=> complete(task.id)}>✔</button>
  <button  className='delete-btn '  onClick={()=> Delete(task.id)}>❌</button>
 </div>
</div>
 </div>
 <div className='info-date'>
 <p>📆 start:{task.startDate} </p>
    <p> ⏳ End: {task.endDate}</p>
  <p>⌚ {task.dayRemaining>0 ?`${task.dayRemaining} daysleft `:'Expired!'}</p>
 </div>
  </div>
  </>

  )
}
