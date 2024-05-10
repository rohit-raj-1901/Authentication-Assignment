const Joi = require('joi');


exports.validateUpdateProfile = (profileData) => {
    const schema = Joi.object({
    
        name: Joi.string().min(3).max(50),
        bio: Joi.string().max(255),
        phone: Joi.string().pattern(/^[0-9]{10}$/),
        email: Joi.string().email(),
    
    });
    return schema.validate(profileData);
};
s