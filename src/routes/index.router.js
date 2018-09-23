/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();
const path = require('path');

// GET index.html
router.get('/', (req, res) => {
    //console.log('In base GET route.');
    const indexRoute = (path.resolve('src/public/index.html'));
    res.sendFile(indexRoute);
}); // end GET

module.exports = router;