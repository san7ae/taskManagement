"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.createTask = exports.getTasks = void 0;
// In-memory task storage
let tasks = [];
// Get all tasks
const getTasks = (req, res) => {
    res.json(tasks);
};
exports.getTasks = getTasks;
// Create a new task
const createTask = (req, res) => {
    const { title } = req.body;
    if (!title) {
        res.status(400).json({ message: 'Title is required' });
    }
    const newTask = {
        id: String(tasks.length + 1),
        title,
        completed: false,
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
};
exports.createTask = createTask;
// Update a task
const updateTask = (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;
    const task = tasks.find((task) => task.id === id);
    if (!task) {
        res.status(404).json({ message: 'Task not found' });
    }
    if (task && title)
        task.title = title;
    if (task && completed)
        task.completed = completed;
    res.json(task);
};
exports.updateTask = updateTask;
// Delete a task
const deleteTask = (req, res) => {
    const { id } = req.params;
    tasks = tasks.filter((task) => task.id !== id);
    res.status(204).send();
};
exports.deleteTask = deleteTask;
