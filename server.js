const express = require('express');
const serveStatic = require('serve-static');

const router = require('./router.js');

const server = express();
const port = process.env.PORT || 3001;


server.use(serveStatic('build', { index: false }));
server.use(router);

server.listen(port, () => console.log(`Listening on port ${port}`));
