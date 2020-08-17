const { callSendApi } = require('../request/callSendApi');

const senderActions = (senderId) => {
    const messageData = {
        recipient: {
            id: senderId
        },
        sender_action: 'typing_on'
    };
    callSendApi(messageData);
};

module.exports = { senderActions };