import { Task } from '../models/task';
import { Request, Response } from 'express';

// In-memory task storage
let tasks: Task[] = [];

// Get all tasks
export const getTasks = (req: Request, res: Response) => {
    res.json(tasks);
};

// Create a new task
export const createTask = (req: Request, res: Response) => {
    const { title } = req.body;

    if (!title) {
     res.status(400).json({ message: 'Title is required' });
    }

    const newTask: Task = {
        id: String(tasks.length + 1),
        title,
        completed: false,
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
};

// Update a task
export const updateTask = (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, completed } = req.body;

    const task = tasks.find((task) => task.id === id);

    if (!task) {
        res.status(404).json({ message: 'Task not found' });
    }

    if (task && title) task.title = title;
    if (task && completed) task.completed = completed;

    res.json(task);
};

// Delete a task
export const deleteTask = (req: Request, res: Response) => {
    const { id } = req.params;

    tasks = tasks.filter((task) => task.id !== id);
    res.status(204).send();
};
