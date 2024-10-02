// app/components/TaskList.tsx
import React, { useState } from "react";

interface Task {
  text: string;
  date: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (index: number) => void;
  onDeleteTask: (index: number) => void;
  onEditTask: (index: number, newText: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggleTask,
  onDeleteTask,
  onEditTask,
}) => {
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editText, setEditText] = useState<string>("");

  const handleEditClick = (index: number) => {
    setEditIndex(index);
    setEditText(tasks[index].text); // Set the text to the current task text
  };

  const handleSaveEdit = (index: number) => {
    onEditTask(index, editText); // Call the edit function with new text
    setEditIndex(null); // Exit edit mode
    setEditText(""); // Clear the input
  };

  return (
    <div className="w-full">
      {tasks.map((task, index) => (
        <div
          key={index}
          className={`flex justify-between items-center border-b py-2 ${
            task.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {editIndex === index ? (
            <div className="flex items-center">
              <input
                type="text" // This should be fine since "text" is a valid HTML input type
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1 mr-2 text-black" // Added 'text-black' for visible text
                style={{ width: "200px" }} // Ensure input has enough width
              />
              <button
                onClick={() => handleSaveEdit(index)}
                className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
              >
                Save
              </button>
              <button
                onClick={() => setEditIndex(null)} // Cancel editing
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          ) : (
            <div className="flex flex-1" onClick={() => onToggleTask(index)}>
              <span className="h-2 w-2 rounded-full bg-current mr-2"></span>
              <span className="flex-1">{task.text}</span>
              <span className="text-xs text-gray-500">{task.date}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent toggling task when deleting
                  onDeleteTask(index);
                }}
                className="text-red-500 hover:text-red-700"
              >
                🗑️
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent toggling task when editing
                  handleEditClick(index);
                }}
                className="text-blue-500 hover:text-blue-700 ml-2"
              >
                ✏️
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
