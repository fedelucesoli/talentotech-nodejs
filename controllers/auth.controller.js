//UserController.js

import authService from '../services/auth.service.js'; 

const authController = {
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const result = await authService.login(email, password);
      res.json(result);
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  },
  async getAllUsers(req, res) {
    try {
      const users = await authService.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

export default authController;