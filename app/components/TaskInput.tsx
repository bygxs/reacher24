// TaskInput.tsx
import React from "react";

interface TaskInputProps {
  newTask: string;
  setNewTask: React.Dispatch<React.SetStateAction<string>>;
  handleAddTask: () => void;
}

const TaskInput: React.FC<TaskInputProps> = ({
  newTask,
  setNewTask,
  handleAddTask,
}) => {
  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 w-full text-black mb-4"
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
