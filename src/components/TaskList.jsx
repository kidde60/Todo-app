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
        className="p-2 mb-4 border rounded w-full"
      />
      <ul className="space-y-2">
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
