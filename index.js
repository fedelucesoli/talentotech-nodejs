import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import AuthRoutes from './routes/auth.routes.js';
import ProductRoutes from './routes/productos.routes.js';

import dotenv from 'dotenv';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.listen( process.env.PORT || 3000, () => {
    console.log(`Servidor escuchando en http://localhost:${process.env.PORT || 3000}`);
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', ProductRoutes);
app.use('/api/auth', AuthRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'Bienvenido a la API de Productos' });
});