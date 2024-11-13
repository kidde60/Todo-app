import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";

const TaskItem = ({ task }) => {
  const { toggleTaskCompletion, deleteTask, editTask } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    if (newText.trim() !== "") {
      editTask({ ...task, text: newText });
      setIsEditing(false);
    }
  };

  return (
    <li className="flex items-center justify-between p-2 border-b">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
          className="mr-2"
        />
        <span
          className={`flex-1 ${
            task.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {isEditing ? (
            <input
              type="text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              className="p-2 border rounded w-full"
            />
          ) : (
            task.text
          )}
        </span>
      </div>

      <div>
        {isEditing ? (
          <button
            onClick={handleEdit}
            className="text-blue-500 hover:text-blue-700 mr-2"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-500 hover:text-blue-700 mr-2"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => deleteTask(task.id)}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
