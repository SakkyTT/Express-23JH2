const express = require('express');
const router = express.Router();

// testi route
router.get('/', (req, res) => {
    // Tämä koodi suoritetaan kun otetaan yhteys palvelimen juureen
    // console.dir(req, {depth: 1});
    res.json({
        message: 'Hello from Express.js',
        users: [
            {id: 1, name: 'User 1'},
            {id: 2, name: 'User 2'},
        ]
    });
});

module.exports = router;