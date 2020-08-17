const { defaultMessage } = require('../functions/defaultMessage');
const { aboutUs } = require('../functions/aboutUs');

const handleEvent = (senderId, event) => {
    const message = event.message;
    const postback = event.postback;
    if (message) {
        if (message.quick_reply) {
            handlePostback(senderId, message.quick_reply.payload);
        } else {
            handleMessage(senderId, message);
        }
    } else if (postback) {
        handlePostback(senderId, postback.payload);
    }
};

const handleMessage = (senderId, event) => {
    const text = event.text;
    const attachment = event.attachments;
    if (text) {
        defaultMessage(senderId);
    } else if (attachment) {
        defaultMessage(senderId);
    }
};

const handlePostback = (senderId, payload) => {
    switch (payload) {
        case 'GET_STARTED_TOPCART':
            defaultMessage(senderId);
            break;
        case 'PROCCESORS_PAYLOAD':
            console.log(payload);
            break;
        case 'ABOUT_PAYLOAD':
            aboutUs(senderId);
            break;

        default:
            defaultMessage(senderId);
            break;
    };
};

module.exports = { handleEvent };
