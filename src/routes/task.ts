import express from 'express';
import { getAllTasks, getTaskById, createTask, updateTask, deleteTask } from '../controllers/taskController';

const router = express.Router();

// Define your routes and connect them to the controller functions
router.get('/', getAllTasks);
router.get('/:id', getTaskById);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;
