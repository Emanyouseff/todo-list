import { useState } from "react";
import "./App.css";
import TaskForm from "./Component/TaskForm";
import TaskList from "./Component/TaskList";

function App() {
  const [Tasts, setTasts] = useState([]);
  const addTask = function (taskText, startDate, endDate) {
    const today = new Date();
    const end = new Date(endDate);
    const timeDiff = end - today;

    const dayRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    const newTask = {
      id: Date.now(),
      text: taskText,
      startDate,
      endDate,
      dayRemaining,
      status: "pending",
    };

    setTasts([...Tasts, newTask]);
    console.log(...Tasts);
  };
  const taskComplete = (taskId) => {
    setTasts(
      Tasts.map((task) => {
        if (task.id === taskId) {
          let newStatus;
          if (task.status === "pending") newStatus = "in-progress";
          else if (task.status === "in-progress") newStatus = "completed";
          else newStatus = "pending";
          return { ...task, status: newStatus };
        }
        return task;
      }),
    );
  };
  const deleteTask = (taskId) => {
    setTasts(Tasts.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId, newText) => {
    setTasts(
      Tasts.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task,
      ),
    );
  };

  return (
    <>
      <div className="app-container">
        <TaskForm onAddTask={addTask} />
        <TaskList
          tasks={Tasts}
          complete={taskComplete}
          Delete={deleteTask}
          onEdit={editTask}
        />
      </div>
    </>
  );
}

export default App;
