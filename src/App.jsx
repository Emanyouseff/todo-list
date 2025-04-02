
import { useState } from 'react'
import './App.css'
import TaskForm from './Component/TaskForm'
import TaskList from './Component/TaskList'


function App() {
const [Tasts, setTasts] = useState([])
const addTask= function(taskText ,startDate,endDate){
  const today= new Date() ;
  const end= new Date(endDate)
const timeDiff=end -today;

const dayRemaining=Math.ceil(timeDiff/(1000*60*60*24))
const newTask={
  id:Date.now(), text:taskText,startDate,endDate,dayRemaining, completed:false
}
setTasts([...Tasts,newTask])
}
const taskComplete= (taskId)=>{
setTasts(Tasts.map(task=> task.id ===taskId?{...task ,completed :!task.completed}:task ))
}
const deleteTask =(taskId)=>{
  setTasts(Tasts.filter(task=> task.id !==taskId))

}

  return (
    <>
    <div  >
       <TaskForm onAddTask={addTask}/>
    <TaskList tasks={Tasts} complete={taskComplete}Delete={deleteTask}/>
    </div>
  
    </>
  )
}

export default App
