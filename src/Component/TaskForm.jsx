import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function TaskForm({ onAddTask }) {
  const [taskText, setTaskText] = useState("");
   const today = new Date().toISOString().split("T")[0];

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // If user picks a start date after the current end date, keep endDate >= startDate
    if (startDate && endDate && startDate > endDate) {
      setEndDate(startDate);
    }
    if (error) setError("");
  }, [startDate, endDate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = taskText.trim();
    if (!text || !startDate || !endDate) {
      setError("Please fill in a task and both dates.");
      return;
    }
    if (startDate > endDate) {
      setError("Start date cannot be later than end date.");
      return;
    }
 if ( endDate == today ) {
      setError("End date cannot be less than today");
      return;
    } 
    onAddTask(text, startDate, endDate);
    setTaskText("");
    setStartDate("");
    setEndDate("");
    setError("");
  };

//   const isInvalid =
//     taskText.trim() === "" || !startDate || !endDate || startDate > endDate;
// disabled={isInvalid}
  return (
    <form
      onSubmit={handleSubmit}
      className="task-form"
      aria-label="Add task form"
    >
      <label htmlFor="taskText" className="task-label">
        Task
      </label>
      <input
        id="taskText"
        type="text"
        value={taskText}
        placeholder="Enter a task..."
        onChange={(e) => setTaskText(e.target.value)}
        className="task-input"
      />

      <label htmlFor="startDate" className="task-label">
        Start date
      </label>
      <input
        id="startDate"
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="date-input"
        max={endDate || ""}
      />

      <label htmlFor="endDate" className="task-label">
        End date
      </label>
      <input
        id="endDate"
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="date-input"
        min={today}
      />

      <button type="submit" className="task-button" 
      >
        Add task
      </button>

      {error && (
        <div
          className="task-error"
          role="alert"
          style={{ color: "crimson", marginTop: "0.5rem" }}
        >
          {error}
        </div>
      )}
    </form>
  );
}

TaskForm.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};
