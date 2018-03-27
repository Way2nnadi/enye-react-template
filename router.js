const express = require('express');
const path = require('path');

const router = express.Router();
const production = process.env.NODE_ENV === 'production';

router.get('/', (req, res) => {
    const homeHTML = production ? '/index.html' : './index-dev.html';
    res.sendFile(path.join(__dirname + `/${homeHTML}`));
});

module.exports = router;
