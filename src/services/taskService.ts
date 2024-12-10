import { Task, tasks } from '../models/task';

export const createTask = (title: string): Task => {
  const newTask: Task = {
    id: (tasks.length + 1).toString(),
    title,
    completed: false,
  };
  tasks.push(newTask);
  return newTask;
};

export const getAllTasks = (): Task[] => {
  return tasks;
};

export const getTaskById = (id: string): Task | undefined => {
  return tasks.find(task => task.id === id);
};

export const updateTask = (id: string, title: string, completed: boolean): Task | undefined => {
  const task = tasks.find(task => task.id === id);
  if (task) {
    task.title = title;
    task.completed = completed;
    return task;
  }
  return undefined;
};

export const deleteTask = (id: string): boolean => {
  const index = tasks.findIndex(task => task.id === id);
  if (index !== -1) {
    tasks.splice(index, 1);
    return true;
  }
  return false;
};
