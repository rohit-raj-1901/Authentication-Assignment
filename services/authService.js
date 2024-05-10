const passport = require('passport');

const User = require('../models/users');

exports.register = async (userData) => {
    try {
        
        const existingUser = await User.findOne({ username: userData.username });
        if (existingUser) {
            throw new Error('Username is already taken');
        }

       
        const newUser = new User(userData);
        const savedUser = await newUser.save();

        return savedUser;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.login = async (req, res, next) => {
    return new Promise((resolve, reject) => {
        passport.authenticate('local', (err, user, info) => {
            if (err) {
                reject(err);
            }
            if (!user) {
                reject(info.message);
            }
            req.logIn(user, (err) => {
                if (err) {
                    reject(err);
                }
                resolve(user);
            });
        })(req, res, next);
    });
};

exports.logout = async (req) => {
    req.logout();
};



exports.authenticateWithExternalProvider = async (provider, req, res, next) => {
    passport.authenticate(provider, { scope: ['profile', 'email'] })(req, res, next);
};

exports.authenticateCallback = async (provider, req, res, next) => {
    passport.authenticate(provider, async (err, user) => {
        try {
            if (err) {
                throw new Error(err.message);
            }
            if (!user) {
                throw new Error('Authentication failed');
            }
            req.logIn(user, (err) => {
                if (err) {
                    throw new Error(err.message);
                }
                res.redirect('/'); // Redirect to the home page after successful authentication
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    })(req, res, next);
};
