require('dotenv').config();
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoute');
const profileRoutes = require('./routes/profileRoute');
const adminRoutes = require('./routes/adminRoute');
const database = require('./config/database');
const passportConfig = require('./config/passport');

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
app.use('/admin', adminRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
