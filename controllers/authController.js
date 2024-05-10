const passport = require('passport');
const authService = require('../services/authService');

exports.register = async (req, res, next) => {
    try {
        const newUser = await authService.register(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.login = async (req, res, next) => {
    try {
        await authService.login(req, res, next);
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};

exports.loginWithExternalProvider = async (req, res, next) => {
    try {
        await authService.authenticateWithExternalProvider(req.params.provider, req, res, next);
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};

exports.logout = async (req, res, next) => {
    try {
        await authService.logout(req);
        res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
