const { callSendApi } = require('../request/callSendApi');
const { senderActions } = require('../senderActions');

const defaultMessage = (senderId) => {
    const messageData = {
        recipient: {
            id: senderId
        },
        message: {
            text: 'Hola, soy el bot de Topcart, te invito a interactuar con nuestro menu.',
            quick_replies: [
                {
                    content_type: 'text',
                    title: 'Ver Procesadores',
                    payload: 'PROCCESORS_PAYLOAD'
                },
                {
                    content_type: 'text',
                    title: 'Acerca de',
                    payload: 'ABOUT_PAYLOAD'
                },
                {
                    content_type: 'text',
                    title: 'Soporte',
                    payload: 'CONTACT_PAYLOAD'
                }
            ]
        }
    };
    senderActions(senderId);
    callSendApi(messageData);
};

module.exports = { defaultMessage };
