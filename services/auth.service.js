// Auth Service

import jwt from 'jsonwebtoken';
import User from '../models/users.models.js';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

if (!JWT_SECRET_KEY) {
    throw new Error('JWT_SECRET_KEY is not defined in the .env file');
}

const authService = {
    async login(email, password) {
        try {
        const user = await User.findOne(email);

        // Check if user exists and password matches
        if (!user || !(await user.comparePassword(password))) {
            console.log(user.email, password);
            throw new Error('Credenciales inválidas');
        }           
        const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET_KEY, { expiresIn: '1h' });
        
        return { token };
        } catch (error) {
            throw new Error('Error al iniciar sesión: ' + error.message);
        }
    },
    async getAllUsers() {
        try {
            const users = await User.find();
            return users;
        } catch (error) {
            throw new Error('Error al obtener usuarios: ' + error.message);
        }
    }
};

export default authService;