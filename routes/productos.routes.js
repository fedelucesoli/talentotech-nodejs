// Rutas para productos
import { Router } from 'express';
import productoController from '../controllers/productos.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const router = Router();

// Ruta para obtener todos los productos
router.get('/productos', productoController.getAllProducts);

// Ruta para obtener un producto por ID
router.get('/productos/:id', productoController.getProductById);

// Ruta para guardar un nuevo producto
router.post('/productos', authMiddleware, productoController.storeProducto);

export default router;