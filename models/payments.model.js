const { Schema, model } = require('mongoose');

const PaymentsSchema = Schema({

    name: {
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

PaymentsSchema.method('toJSON', function() {

    const { __v, _id, ...object } = this.toObject();
    object.paymid = _id;
    return object;

});

module.exports = model('Payments', PaymentsSchema);