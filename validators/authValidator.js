const Joi = require('joi');
exports.validateRegister = (userData) => {
    const schema = Joi.object({
        username: Joi.string().min(3).max(30).required(),
        password: Joi.string().min(6).required(),
       
    });
    return schema.validate(userData);
};

exports.validateLogin = (userData) => {
    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
    });
    return schema.validate(userData);
};
