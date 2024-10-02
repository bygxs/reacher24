import React, { useEffect, useState } from "react";

const TodoSection = () => {
  const [tasks, setTasks] = useState<{ text: string; date: string; completed: boolean }[]>([]);
  const [newTask, setNewTask] = useState("");
  const [editTaskIndex, setEditTaskIndex] = useState<number | null>(null);
  const [editTaskText, setEditTaskText] = useState("");

  // Load tasks from local storage on component mount
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Update local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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

  const handleEditTask = (index: number) => {
    setEditTaskIndex(index);
    setEditTaskText(tasks[index].text);
  };

  const handleSaveEdit = () => {
    if (editTaskIndex !== null) {
      const updatedTasks = tasks.map((task, i) =>
        i === editTaskIndex ? { ...task, text: editTaskText } : task
      );
      setTasks(updatedTasks);
      setEditTaskIndex(null);
      setEditTaskText("");
    }
  };

  const handleCancelEdit = () => {
    setEditTaskIndex(null);
    setEditTaskText("");
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-md">
      <h2 className="text-xl font-semibold">Todo List</h2>
      
      {/* Task Input Section */}
      <div className="flex gap-2 w-full">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full text-black"
          placeholder="Enter a new task"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Add Task
        </button>
      </div>

      {/* Task List Section */}
      <div className="w-full">
        {tasks.map((task, index) => (
          <div
            key={index}
            className={`flex justify-between items-center border-b py-2 ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
            onClick={() => handleToggleTask(index)} // Toggle task completion on click
          >
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
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleEditTask(index); // Start editing
              }}
              className="text-yellow-500 hover:text-yellow-700"
            >
              ✏️ {/* Edit Icon */}
            </button>
          </div>
        ))}
      </div>

      {/* Edit Task Section */}
      {editTaskIndex !== null && (
        <div className="flex gap-2 w-full">
          <input
            type="text"
            value={editTaskText}
            onChange={(e) => setEditTaskText(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-full text-black"
          />
          <button
            onClick={handleSaveEdit}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
          >
            Save
          </button>
          <button
            onClick={handleCancelEdit}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoSection;