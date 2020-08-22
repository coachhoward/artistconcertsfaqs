const express = require('express');
const router = express.Router();
const Artist = require('../models/artists.js');

// add routes
// Index
router.get('/', (req, res) => {
    // Use artists model to get all artists
    Artist.find({}, (error, allArtists) => {
        res.render('artists/Index', {
            artists: allArtists
        })
    });

});

// New
router.get('/new', (req, res) => {
    res.render('artists/New');
});

// Create
router.post('/', (req, res) => {
    if (req.body.requireFaq === "on") {
        req.body.requireFaq = true;
    } else {
        req.body.requireFaq = false;
    }
    // Use Model to create Artist Document
    Artist.create(req.body, (error, createdArtist) => {
        // Once created - respond to client
        res.redirect('/artists');
    });
});


// Show
router.get('/:id', (req, res) => {
    // Find the specific document
    Artist.findById(req.params.id, (error, foundArtist) => {
        // render the Show route and pass it the foundArtist
        res.render('artists/Show', {
            artist: foundArtist
        });
    });
});


// Delete
router.delete('/:id', (req, res) => {
    // Delete document from collection
    Artist.findByIdAndRemove(req.params.id, (err, artist) => {
        res.redirect('/artists');
    });
});

// Edit 
router.get('/:id/edit', (req, res) => {
    // Find our document from the collection - using mongoose model
    Artist.findById(req.params.id, (err, foundArtist) => {
        // render the edit view and pass it the found artist
        res.render('artists/Edit', {
            artist: foundArtist
        })
    });
});

// PutireFaq
router.put('/:id', (req, res) => {
    req.body.requireFaq = req.body.requireFaq === "on" ? true : false;

    // Update the artist document using our model
    Artist.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
        res.redirect('/artists');
    });
});


// export router
module.exports = router;