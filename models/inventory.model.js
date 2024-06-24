const { Schema, model } = require('mongoose');

const InvetorySchema = Schema({

    currency: {
        type: String,
        require: true
    },

    amount: {
        type: String,
        require: true
    },

    tc: {
        type: String,
        require: true
    },

    tv: {
        type: String,
        require: true
    },

    tp: {
        type: String,
        require: true
    },

    status: {
        type: Boolean,
        require: true
    },

    fecha: {
        type: Date,
        default: Date.now
    }

});

InvetorySchema.method('toJSON', function() {

    const { __v, _id, password, ...object } = this.toObject();
    object.invid = _id;
    return object;

});

module.exports = model('Inventories', InvetorySchema);