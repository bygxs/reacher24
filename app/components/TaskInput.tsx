import React, { useState } from "react";

interface TaskInputProps {
  onAddTask: () => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onAddTask();
      setNewTask(""); // Clear input after adding
    }
  };

  return (
    <div className="flex flex-col w-full">
      <input
        type="text"
        value={newTask}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        className="border border-gray-300 rounded px-4 py-2 w-full text-black mb-2"
        placeholder="Enter a new task"
      />
      <button
        onClick={() => {
          onAddTask();
          setNewTask(""); // Clear input after adding
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 transition-colors"
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;