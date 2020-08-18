const { defaultMessage } = require('../functions/defaultMessage');
const { aboutUs } = require('../functions/aboutUs');
const { showProccesors, showAMDProccesors, showIntelProccesors } = require('../functions/proccesors');
const { imageMessage } = require('../functions/imageMessage');
const { contactSupport } = require('../functions/contactSupport');
const { showLocations } = require('../functions/locations');
const { receipt } = require('../functions/receipt');
const { senderActions } = require('../senderActions');

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
        handleAttachments(senderId);
    }
};

const handlePostback = (senderId, payload) => {
    switch (payload) {
        case 'GET_STARTED_TOPCART':
            defaultMessage(senderId);
            break;
        case 'PROCCESORS_PAYLOAD':
            senderActions(senderId);
            showProccesors(senderId);
            break;
        case 'AMD_PROCCESORS_PAYLOAD':
            senderActions(senderId);
            showAMDProccesors(senderId);
            break;
        case 'INTEL_PROCCESORS_PAYLOAD':
            senderActions(senderId);
            showIntelProccesors(senderId);
            break;
        case 'THREADRIPPER_PAYLOAD':
            senderActions(senderId);
            receipt(senderId);
            break;
        case 'RYZEN9_PAYLOAD':
            senderActions(senderId);
            receipt(senderId);
            break;
        case 'ATHLON_PAYLOAD':
            senderActions(senderId);
            receipt(senderId);
            break;
        case 'COREI9X_PAYLOAD':
            senderActions(senderId);
            receipt(senderId);
            break;
        case 'COREI7_PAYLOAD':
            senderActions(senderId);
            receipt(senderId);
            break;
        case 'LOCATIONS_PAYLOAD':
            senderActions(senderId);
            showLocations(senderId);
            break;
        case 'ABOUT_PAYLOAD':
            aboutUs(senderId);
            break;
        case 'CONTACT_PAYLOAD':
            senderActions(senderId);
            contactSupport(senderId);
            break;

        default:
            defaultMessage(senderId);
            break;
    };
};

const handleAttachments = (senderId, payload) => {
    switch (payload) {
        case 'image':
            imageMessage(senderId);
            break;
        case 'video':
            imageMessage(senderId);
            break;
        case 'audio':
            imageMessage(senderId);
            break;
        case 'file':
            imageMessage(senderId);
            break;
        case 'location':
            imageMessage(senderId);
            break;

        default:
            imageMessage(senderId);
            break;
    }
}

module.exports = { handleEvent };
