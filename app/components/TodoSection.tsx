// components/TodoSection.tsx
"use client";
import { useState } from "react";

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

  const toggleTaskCompletion = (index: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
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

      <ul className="list-disc list-inside mt-4 w-full">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`text-left cursor-pointer ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
            onClick={() => toggleTaskCompletion(index)}
          >
            <div className="flex justify-between">
              <span>{task.text}</span>
              <span className="text-xs text-gray-500">{task.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoSection;
