const request = require('request');

const ACCESS_TOKEN = '';

const callSendApi = (messageToResponse) => {
    request({
        uri: 'https://graph.facebook.com/me/messages',
        qs: {
            access_token: ACCESS_TOKEN
        },
        method: 'POST',
        json: messageToResponse
    }, (error) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Response has been sended');
        }
    });
};

module.exports = { callSendApi };
