const express = require('express');
const router = express.Router();

// yhdessä tiedostossa voi olla useampi route
router.get('/user', (req, res) => {
    // haetaan kaikki käyttäjät

});

router.get('/user/:id', (req, res) => {
    // hakee id:n perusteella

});

router.post('/user/', (req, res) => {
    // tallentaa uuden käyttäjän

});
// ja kaikki voidaan viedä pakettina
module.exports = router;