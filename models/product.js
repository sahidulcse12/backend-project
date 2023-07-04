const { Schema, model } = require('mongoose');

const productSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: [true, "Price must be provided"],
    },
    rating: {
        type: Number,
        default: 4.9,
    },
    featured: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        enum: {
            values: ["apple", "samsung", "dell", "mi"],
            message: `value must be provided`,
        },
    }
});

module.exports = model("Product", productSchema);