import React, { useState, useEffect } from "react";

const TaskForm = ({ onSubmit, initialText = "" }) => {
  const [text, setText] = useState(initialText);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-2 mb-4"
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task"
        className="px-2 border rounded w-full sm:w-3/4"
        required
      />
      <button
        type="submit"
        className="bg-[#f07235] text-white px-4 py-1 rounded mt-2 sm:mt-0 sm:ml-2 w-full sm:w-auto"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
