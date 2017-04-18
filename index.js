const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const socket = require('socket.io');

const debug = require('debug');

let log = debug('chat: ' + __filename.replace(__dirname, ''));

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, '_build/')));

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

// let server = http.createServer(app);
// server.listen(conf, () => {
//     log('Server start @: %j', server.address());
// });

let server = app.listen(conf, () => {
    log('Server start @: %j', server.address());
});

let io = module.exports = new socket(server);
io.on('connection', (socket) => {
    log('socket on connection ...');
});
