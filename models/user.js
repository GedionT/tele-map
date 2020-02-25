const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pointSchema = new Schema()

const userSchema = new Schema({
    username	: { type: String, required: true },
    city		: { type: String, required: true },
    pinLocation : { type: point, required: true },
    description	: { type: String, required: true }
}, {
	timestamps: { createdAt: 'createdAt' , updatedAt: 'modified_At'}
});

module.exports = mongoose.model('User', userSchema);