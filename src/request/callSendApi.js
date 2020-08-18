const request = require('request');

const ACCESS_TOKEN = 'EAAEy4ACYbZBQBABG2b70GnYzPnz2ENIJLVmKAWeAtZBEZAJOouVYbYQZB7IfiLKzZC1CZBmdMMUTXdZBiZAbl9g0L2brbqKIgu2HAbgfDtqCqwFTfSlOIZBnLO6rbfLa6OfCMC53ZA6o4EKRKpBb9ZCmh4ajlvCFNCtXU63iWwwOjQZCKbKXZAVjKjhqz';

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
