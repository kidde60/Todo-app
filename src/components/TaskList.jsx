import React from "react";
import TaskItem from "./TaskItem";
import { useTasks } from "../context/TaskContext";

const TaskList = () => {
  const { tasks, setSearchQuery } = useTasks();

  return (
    <div>
      <input
        type="text"
        placeholder="Search tasks..."
        onChange={(e) => setSearchQuery(e.target.value)}
        className=" mb-4 border rounded w-full px-4 py-1"
      />
      <ul className="p-0">
        {tasks.length > 0 ? (
          tasks.map((task) => <TaskItem key={task.id} task={task} />)
        ) : (
          <p>No tasks found.</p>
        )}
      </ul>
    </div>
  );
};

export default TaskList;
