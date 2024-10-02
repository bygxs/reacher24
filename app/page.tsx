"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState<{ text: string; date: string }[]>([]); // State to hold tasks with date
  const [newTask, setNewTask] = useState(""); // State to hold the new task input

  // Function to handle adding a new task with a date stamp
  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const currentDate = new Date().toLocaleString(); // Get the current date and time
      const newTaskObj = {
        text: newTask,
        date: currentDate,
      };

      // Prepend the new task to the beginning of the tasks array to make newest task appear first
      setTasks([newTaskObj, ...tasks]);
      setNewTask(""); // Clear the input after adding the task
    }
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Header with Your Name */}
      <header className="text-2xl font-bold row-start-1 tracking-wide tracking-[1.5em]">
        B I N I Y A M GEBRE-EGZIABHERH SJOMAR
      </header>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* Todo Section */}
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
          <ul className="list-disc list-inside mt-4 w-full">
            {tasks.map((task, index) => (
              <li key={index} className="text-left">
                <div className="flex justify-between">
                  <span>{task.text}</span> {/* Task description */}
                  <span className="text-xs text-gray-500">{task.date}</span> {/* Date stamp */}
                </div>
              </li>
            ))}
          </ul>
        </div>
  
  
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 flex gap-6 flex-wrap items-center justify-center bg-gray-800 p-4 text-white">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
