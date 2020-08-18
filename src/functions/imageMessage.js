const { callSendApi } = require('../request/callSendApi');

const imageMessage = (senderId) => {
    const messageData = {
        recipient: {
            id: senderId
        },
        message: {
            attachment: {
                type: 'image',
                payload: {
                    url: 'https://media.giphy.com/media/jtXRDVzaCPXSynUz7h/giphy.gif'
                }
            }
        }
    };
    callSendApi(messageData);
};

module.exports = { imageMessage };
