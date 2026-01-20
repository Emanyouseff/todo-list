import React, { useState } from "react";

export default function TaskItem({ task, complete, Delete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEdit = () => {
    if (editText.trim()) {
      onEdit(task.id, editText.trim());
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleEdit();
    } else if (e.key === "Escape") {
      setEditText(task.text);
      setIsEditing(false);
    }
  };
  return (
    <>
      <div
        className={`task-item  ${
          task.status === "completed" ? "completed" : ""
        } `}
      >
        <div>
          <div className="task-name">
            <p className="task-text">
              {isEditing ? (
                <div className="edit-container">
                  <input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    autoFocus
                    className="edit-input"
                  />
                  <button className="save-btn" onClick={handleEdit}>
                    Save
                  </button>
                  <button
                    className="cancel-btn"
                    onClick={() => {
                      setEditText(task.text);
                      setIsEditing(false);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <strong className="font-text">{task.text}</strong>
              )}
              {/* {isEditing ? (
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onBlur={handleEdit}
                  onKeyDown={handleKeyDown}
                  autoFocus
                  className="edit-input"
                />
              ) : (
                <strong
                  className="font-text"
                  onDoubleClick={() => setIsEditing(true)}
                >
                  {task.text}
                </strong>
              )} */}
            </p>
            <div className=" task-action">
              <button
                className="edit-btn"
                onClick={() => setIsEditing(true)}
                style={{ display: isEditing ? "none" : "inline-block" }}
              >
                ✏️
              </button>
              <button
                className="complete-btn"
                onClick={() => complete(task.id)}
              >
                ✔
              </button>
              <button className="delete-btn " onClick={() => Delete(task.id)}>
                ❌
              </button>
            </div>
          </div>
        </div>
        <div className="info-date">
          <p>📆 start:{task.startDate} </p>
          <p> ⏳ End: {task.endDate}</p>
          <p>
            ⌚{" "}
            {task.dayRemaining > 0
              ? `${task.dayRemaining} daysleft `
              : "Expired!"}
          </p>
          <p>Status: {task.status}</p>
        </div>
      </div>
    </>
  );
}
