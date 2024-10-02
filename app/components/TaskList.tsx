// app/components/TaskList.tsx
import React from "react";

interface Task {
  text: string;
  date: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  handleToggleTask: (index: number) => void;
  handleDeleteTask: (index: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, handleToggleTask, handleDeleteTask }) => {
  return (
    <div className="w-full">
      {tasks.map((task, index) => (
        <div
          key={index}
          className={`flex justify-between items-center border-b py-2 ${
            task.completed ? "line-through text-gray-500" : ""
          }`}
          onClick={() => handleToggleTask(index)} // Toggle task completion on click
        >
          <span className="h-2 w-2 rounded-full bg-current mr-2"></span>
          <span className="flex-1">{task.text}</span>
          <span className="text-xs text-gray-500">{task.date}</span>
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent the task from being toggled when clicking the delete button
              handleDeleteTask(index);
            }}
            className="text-red-500 hover:text-red-700"
          >
            🗑️ {/* Delete Icon */}
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;