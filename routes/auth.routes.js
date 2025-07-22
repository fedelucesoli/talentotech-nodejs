import { Router } from 'express';
import authController from '../controllers/auth.controller.js';
const router = Router();

// Ruta para loguearse
router.post('/login', authController.login);

// Ruta para obtener todos los usuarios
// router.get('/users', authController.getAllUsers);

// // Ruta para obtener un usuario por ID
// router.get('/users/:id', authController.getUserById);


export default router; 