import React, { useState } from "react";

const TodoSection = () => {
  const [tasks, setTasks] = useState<
    { text: string; date: string; completed: boolean }[]
  >([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const currentDate = new Date().toLocaleString();
      const newTaskObj = {
        text: newTask,
        date: currentDate,
        completed: false,
      };

      setTasks([newTaskObj, ...tasks]);
      setNewTask("");
    }
  };

  const handleToggleTask = (index: number) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-md">
      <h2 className="text-xl font-semibold">Todo List</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 w-full text-black"
        placeholder="Enter a new task"
      />
      <button
        onClick={handleAddTask}
        className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 transition-colors"
      >
        Add Task
      </button>

      {/* Display the list of tasks */}
      <div className="w-full">
        {tasks.map((task, index) => (
          <div
            key={index}
            className={`flex justify-between items-center border-b py-2 ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
            onClick={() => handleToggleTask(index)} // Toggle task completion on click
          >
            <span className="h-2 w-2 rounded-full bg-current mr-2"></span>{" "}
            {/* Dot */}
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
    </div>
  );
};

export default TodoSection;
