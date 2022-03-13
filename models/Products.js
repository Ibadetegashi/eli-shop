const mongoose = require('mongoose');

const HomeSchema = mongoose.Schema({
    name: String,
    title:String,
    category:String,
    image:String,
    description:String,
    updated_date: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Products', HomeSchema);