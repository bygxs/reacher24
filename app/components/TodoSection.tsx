// app/components/TodoSection.tsx
import React, { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

const TodoSection = () => {
  const [tasks, setTasks] = useState<{ text: string; date: string; completed: boolean }[]>([]);

  const handleAddTask = (task: string) => {
    const currentDate = new Date().toLocaleString();
    const newTaskObj = {
      text: task,
      date: currentDate,
      completed: false,
    };
    setTasks((prevTasks) => [newTaskObj, ...prevTasks]); // Update tasks correctly
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
      <TaskInput onAddTask={handleAddTask} />
      <TaskList 
        tasks={tasks} 
        onToggleTask={handleToggleTask} // Pass toggle function
        onDeleteTask={handleDeleteTask} // Pass delete function
      />
    </div>
  );
};

export default TodoSection;