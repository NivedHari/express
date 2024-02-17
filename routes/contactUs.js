const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/',(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views','contact-us.html'));
});

router.post('/submit', (req, res, next) => {
    res.redirect('/contact-us/success');
});

router.get('/success', (req, res, next) => {
    res.send('Form successfully filled');
});


module.exports = router;
