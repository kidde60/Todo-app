import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";
import ConfirmationModal from "./ConfirmationModal";

const TaskItem = ({ task }) => {
  const { deleteTask, toggleCompleted, editTask } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCheckboxChange = () => {
    toggleCompleted(task.id); // Toggle completed status
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (newText.trim()) {
      editTask({ ...task, text: newText }); // Save the updated task
      setIsEditing(false);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false); // Cancel editing
    setNewText(task.text); // Restore the original text
  };

  const handleDeleteClick = () => {
    setIsModalOpen(true); // Open the confirmation modal
  };

  const handleDeleteConfirm = () => {
    deleteTask(task.id); // Delete the task after confirmation
    setIsModalOpen(false); // Close the modal
  };

  const handleDeleteCancel = () => {
    setIsModalOpen(false); // Close the modal without deleting
  };

  return (
    <li className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleCheckboxChange}
        className="h-4 w-4"
      />
      {isEditing ? (
        <form onSubmit={handleEditSubmit} className="flex-1 space-x-2">
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="p-2 border rounded w-full"
          />
          <button type="submit" className="text-blue-500 hover:text-blue-700">
            Save
          </button>
          <button
            type="button"
            onClick={handleCancelEdit}
            className="text-gray-500 hover:text-gray-700"
          >
            Cancel
          </button>
        </form>
      ) : (
        <>
          <span
            className={`flex-1 ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {task.text}
          </span>
          <button
            onClick={handleEditClick}
            className="text-blue-500 hover:text-blue-700"
          >
            Edit
          </button>
          <button
            onClick={handleDeleteClick}
            className="text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        </>
      )}

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
      />
    </li>
  );
};

export default TaskItem;
