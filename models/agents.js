const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const agentSchema = new Schema({
    title: { type: String, required: true },
    faq: { type: String, required: true },
    requireFaq: Boolean
}, { timestamps: true });

//  Create Model from our Schema
const Agent = mongoose.model('Agent', agentSchema);

// Export Agent Model
module.exports = Agent;