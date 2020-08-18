'use strict';
const express = require('express');
const bodyParser = require('body-parser');

const { handleEvent } = require('./events');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Bienvenido a Topcart');
});

app.get('/webhook', (req, res) => {
    if (req.query['hub.verify_token'] === 'topcart_token') {
        res.send(req.query['hub.challenge']);
    } else {
        res.send('Unauthorized');
    }
});

app.post('/webhook/', (req, res) => {
    const webhook_event = req.body.entry[0];
    const messaging = webhook_event.messaging;
    if (messaging) {
        messaging.forEach(event => {
            handleEvent(event.sender.id, event);
        });
    }
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Server is listening on https://localhost:${PORT}`);
});

