// app/components/TaskInput.tsx
import React, { useState } from "react";

interface TaskInputProps {
  onAddTask: (task: string) => void; // Prop to add task
}

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      onAddTask(newTask); // Call the function from props
      setNewTask(""); // Clear the input
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 w-full text-black mb-2"
        placeholder="Enter a new task"
      />
      <button
        onClick={handleAddTask}
        className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 transition-colors"
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
