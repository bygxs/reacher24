import React from "react";

interface Task {
  text: string;
  date: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (index: number) => void;
  onDeleteTask: (index: number) => void;
  onEditTask: (index: number, newText: string) => void; // Include the edit prop
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggleTask,
  onDeleteTask,
  onEditTask, // Accept the edit prop
}) => {
  return (
    <div className="w-full">
      {tasks.map((task, index) => (
        <div
          key={index}
          className={`flex justify-between items-center border-b py-2 ${
            task.completed ? "line-through text-gray-500" : ""
          }`}
          onClick={() => onToggleTask(index)} // Toggle task completion on click
        >
          <span className="flex-1">{task.text}</span>
          <span className="text-xs text-gray-500">{task.date}</span>
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent the task from being toggled when clicking the delete button
              onDeleteTask(index);
            }}
            className="text-red-500 hover:text-red-700"
          >
            🗑️ {/* Delete Icon */}
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent toggling task when clicking the edit button
              // Trigger the editing functionality here
              // Example: You could call a function to handle editing
              const newText = prompt("Edit task:", task.text);
              if (newText) {
                onEditTask(index, newText);
              }
            }}
            className="text-blue-500 hover:text-blue-700 ml-2"
          >
            ✏️ {/* Edit Icon */}
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
