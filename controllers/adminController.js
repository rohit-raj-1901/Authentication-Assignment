const profileService = require('../services/profileService');

exports.getAllProfiles = async (req, res, next) => {
    try {
        const allProfiles = await profileService.getAllProfiles();
        res.status(200).json(allProfiles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
