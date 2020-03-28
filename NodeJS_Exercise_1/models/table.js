const mongoose = require('mongoose'); 
const Joi = require('joi'); 

// ----------------------------------------- Creating Model -------------------
const Table = mongoose.model('Table', new mongoose.Schema({ 
    firstname: {
        type: String,
        required: true,
        trim: true,
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
    }
}));

// ------------------------------- Validating properties -------------------
const validate = (name) => {  
    const schema = {
        firstname: Joi.string().min(1).required(),
        lastname: Joi.string().min(1).required()
    };
    return Joi.validate(name, schema);
}

exports.Table = Table;
exports.validate = validate;