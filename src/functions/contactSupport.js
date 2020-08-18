const { callSendApi } = require('../request/callSendApi');

const contactSupport = (senderId) => {
    const messageData = {
        recipient: {
            id: senderId
        },
        message: {
            attachment: {
                type: 'template',
                payload: {
                    template_type: 'button',
                    text: 'Hola quieres contactar a soporte técnico?',
                    buttons: [
                        {
                            type: 'phone_number',
                            title: 'Llamar a un asesor',
                            payload: '+50212312322'
                        }
                    ]
                }
            }
        }
    };
    callSendApi(messageData);
}

module.exports = { contactSupport }
