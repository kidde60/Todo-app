import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";
import ConfirmationModal from "./ConfirmationModal"; // Import the modal

const TaskItem = ({ task }) => {
  const { toggleTaskCompletion, deleteTask, editTask } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  // Modal state
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleEdit = () => {
    if (newText.trim() !== "") {
      editTask({ ...task, text: newText });
      setIsEditing(false);
    }
  };

  const showModal = () => {
    setIsModalVisible(true); // Show the modal
  };

  const handleDeleteConfirm = () => {
    deleteTask(task.id); // Perform the delete action
    setIsModalVisible(false); // Close the modal after confirmation
  };

  const handleDeleteCancel = () => {
    setIsModalVisible(false); // Close the modal if canceled
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
        {/* Triggering the Confirmation Modal for Delete */}
        <button onClick={showModal} className="text-red-500 hover:text-red-700">
          Delete
        </button>
      </div>
      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={isModalVisible}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
      />
    </li>
  );
};

export default TaskItem;
