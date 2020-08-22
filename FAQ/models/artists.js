const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const artistSchema = new Schema({
    title: { type: String, required: true },
    faq: { type: String, required: true },
    requireFaq: Boolean
}, { timestamps: true });

//  Create Model from our Schema
const Artist = mongoose.model('Artist', artistSchema);

// Export Artist Model
module.exports = Artist;
