const User = require('../models/users');

exports.getUserProfile = async (userId) => {
    try {
        const user = await User.findById(userId);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.updateUserProfile = async (userId, updatedFields) => {
    try {
        const user = await User.findByIdAndUpdate(userId, updatedFields, { new: true });
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.toggleProfilePrivacy = async (userId, isPublic) => {
    try {
        const user = await User.findByIdAndUpdate(userId, { isPublic }, { new: true });
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.getAllProfiles = async () => {
    try {
        const profiles = await User.find({});
        return profiles;
    } catch (error) {
        throw new Error(error.message);
    }
};
