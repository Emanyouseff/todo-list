import React, { useState } from 'react'


export default function TaskForm({onAddTask}) {
    const [taskText, settaskText] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const handleSubmit= (e)=>{
        e.preventDefault();
        if(taskText.trim()===''|| startDate===''||endDate==='')return;
        onAddTask(taskText,startDate,endDate);
        settaskText('')
        setStartDate('')
        setEndDate('')
    }
  return (<>
  <form onSubmit={handleSubmit} className='task-form'>
<input type="text" value={taskText} placeholder='Enter A Task....'  onChange={(e)=> settaskText(e.target.value)} className='task-input' />
<input type="date" value={startDate} onChange={(e)=> setStartDate(e.target.value)} className='date-input' />
<input type="date" value={endDate} onChange={(e)=> setEndDate(e.target.value)} className='date-input' />
<button type='submit' className='task-button'> Add task</button>
  </form>

  </>
 
  )
}
