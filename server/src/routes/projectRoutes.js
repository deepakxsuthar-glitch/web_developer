import express from 'express';
import { getProjects, createProject, deleteProject } from '../controllers/projectController.js';
import { protectAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getProjects);
router.post('/', protectAdmin, createProject);
router.delete('/:id', protectAdmin, deleteProject);

export default router;
