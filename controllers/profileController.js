const profileService = require('../services/profileService');

exports.getProfile = async (req, res, next) => {
    try {
        const userId = req.user._id; // Assuming user ID is stored in req.user after authentication
        const userProfile = await profileService.getUserProfile(userId);
        res.status(200).json(userProfile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateProfile = async (req, res, next) => {
    try {
        const userId = req.user._id; 
        const updatedProfile = await profileService.updateUserProfile(userId, req.body);
        res.status(200).json(updatedProfile);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.togglePrivacy = async (req, res, next) => {
    try {
        const userId = req.user._id; 
        const { isPublic } = req.body;
        const updatedProfile = await profileService.toggleProfilePrivacy(userId, isPublic);
        res.status(200).json(updatedProfile);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
