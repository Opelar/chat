const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const IO = require('socket.io');

const debug = require('debug');

let log = debug('chat: ' + __filename.replace(__dirname, ''));

let app = express();

app.use((req, res, next) => {
    if (req.path === '/favicon.ico') {
        return;
    }

    next();
});

app.use((req, res, next) => {
    log('------ query: ------');
    log(req.query || {});

    log('------ body: ------');
    log(req.body || {});

    next();
});

app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.code = 404;

    next(err);
});

app.use((err, req, res, next) => {
    log(err && err.stack);

    res.status(err.code || 500).json(err.message);
});

let conf = {
    address: '127.0.0.1',
    port: 8081
};

let server = module.exports = http.createServer(app);
let io = IO(server);

io.on('connection', (a) => {
    log('socket on connection, %j', a);
});

server.listen(conf, () => {
    log('Server start @: %j', server.address());
});
