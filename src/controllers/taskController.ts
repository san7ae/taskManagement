import { Request, Response } from 'express';
import * as taskService from '../services/taskService';

// Get all tasks
export const getAllTasks = (req: Request, res: Response) : void => {
    const allTasks = taskService.getAllTasks();
    res.status(200).json(allTasks);
};

// get task
export const getTaskById = (req: Request, res: Response) : void => {
    const {id} = req.params;
    const task = taskService.getTaskById(id);

    if(task){
        res.status(200).json(task);
    }else{
        res.status(404).json({message : 'Task not found'});
    }
    
}

// Create a new task
export const createTask = (req: Request, res: Response) : void => {
    const { title } = req.body;

    if (!title) {
     res.status(400).json({ message: 'Title is required' });
     return;
    }

    const newTask = taskService.createTask(title);
    res.status(201).json(newTask);
};

// Update a task
export const updateTask = (req: Request, res: Response) : void => {
    const {id} = req.params;
    const {title, completed} = req.body;

    if(!title && completed == undefined){
        res.status(400).json({ message : 'Title or completed status required' });
    }

    const updatedTask = taskService.updateTask(id, title, completed);
    if(updatedTask){
        res.status(200).json(updatedTask);
    } else{
        res.status(404).json({message : 'Task not found!'});
    }
}

// Delete a task
export const deleteTask = (req: Request, res: Response) : void => {
    const {id} = req.params;
    const isDeleted = taskService.deleteTask(id);

    if(isDeleted){
        res.status(204).send();
    }else{
        res.status(404).json({message : 'Task not found'});
    }
}

