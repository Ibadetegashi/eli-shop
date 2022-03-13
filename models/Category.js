const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    name: String,
    description:String,
    updated_date: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Category', CategorySchema);