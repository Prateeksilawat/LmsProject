import express from 'express';
import { getAllCourse, getCourseId } from '../controllers/courseController.js';


const courseRouter = express.Router();

// Route to get all published courses
courseRouter.get('/all', getAllCourse);

// Route to get a specific course by ID
courseRouter.get('/:id', getCourseId);

export default courseRouter;
