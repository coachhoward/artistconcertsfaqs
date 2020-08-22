const express = require('express');
const router = express.Router();
const Agent = require('../models/agents.js');

// add routes
// Index
router.get('/', (req, res) => {
    // Use agents model to get all agents
    Agent.find({}, (error, allAgents) => {
        res.render('agents/Index', {
            agents: allAgents
        })
    });

});

// New
router.get('/new', (req, res) => {
    res.render('agents/New');
});

// Create
router.post('/', (req, res) => {
    if (req.body.requireFaq === "on") {
        req.body.requireFaq = true;
    } else {
        req.body.requireFaq = false;
    }
    // Use Model to create Agent Document
    Agent.create(req.body, (error, createdAgent) => {
        // Once created - respond to client
        res.redirect('/agents');
    });
});


// Show
router.get('/:id', (req, res) => {
    // Find the specific document
    Agent.findById(req.params.id, (error, foundAgent) => {
        // render the Show route and pass it the foundAgent
        res.render('agents/Show', {
            agent: foundAgent
        });
    });
});


// Delete
router.delete('/:id', (req, res) => {
    // Delete document from collection
    Agent.findByIdAndRemove(req.params.id, (err, agent) => {
        res.redirect('/agents');
    });
});

// Edit 
router.get('/:id/edit', (req, res) => {
    // Find our document from the collection - using mongoose model
    Agent.findById(req.params.id, (err, foundAgent) => {
        // render the edit view and pass it the found agent
        res.render('agents/Edit', {
            agent: foundAgent
        })
    });
});

// PutireFaq
router.put('/:id', (req, res) => {
    req.body.requireFaq = req.body.requireFaq === "on" ? true : false;

    // Update the agent document using our model
    Agent.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
        res.redirect('/agents');
    });
});


// export router
module.exports = router;