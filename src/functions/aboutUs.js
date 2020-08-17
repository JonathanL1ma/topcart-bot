const { callSendApi } = require('../request/callSendApi');
const { senderActions } = require('../senderActions');

const aboutUs = (senderId) => {
    const messageData = {
        recipient: {
            id: senderId
        },
        message: {
            text: 'Con este bot podras ver las localizaciones de nuestras sucursales, los procesadores que ofrecemos, nuestra página web, la ubicación de nuestra central, y mucho más. Te invito a interactuar con el bot para que puedas ver todo lo que te ofrece.'
        }
    };
    senderActions(senderId);
    callSendApi(messageData);
};

module.exports = { aboutUs }
