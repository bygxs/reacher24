import { create } from 'zustand'; // Updated import statement

type Task = {
    text: string;
    completed: boolean;
};

type Store = {
    tasks: Task[];
    filter: 'all' | 'active' | 'completed';
    addTask: (text: string) => void;
    toggleTask: (index: number) => void;
    setFilter: (filter: 'all' | 'active' | 'completed') => void;
};

export const useTaskStore = create<Store>((set) => ({
    tasks: [],
    filter: 'all',
    addTask: (text) => set((state) => ({
        tasks: [...state.tasks, { text, completed: false }],
    })),
    toggleTask: (index) => set((state) => {
        const tasks = [...state.tasks];
        tasks[index].completed = !tasks[index].completed;
        return { tasks };
    }),
    setFilter: (filter) => set({ filter }),
}));