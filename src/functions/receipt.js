const { callSendApi } = require('../request/callSendApi');

const receipt = (senderId) => {
    const messageData = {
        recipient: {
            id: senderId
        },
        message: {
            attachment: {
                type: 'template',
                payload: {
                    template_type: 'receipt',
                    recipient_name: 'Jonathan Lima',
                    order_number: '12345678902',
                    currency: 'GTQ',
                    payment_method: 'Efectivo',
                    order_url: 'https://jonthanlima-portfolio.netlify.app',
                    timestamp: '1428444852',
                    address: {
                        street_1: 'Ciudad Cayala',
                        street_2: 'Zona 16',
                        city: 'Guatemala',
                        postal_code: '01016',
                        state: 'Guatemala',
                        country: 'Guatemala'
                    },
                    summary: {
                        subtotal: 4000.00,
                        shipping_cost: 50.00,
                        total_tax: 24.00,
                        total_cost: 4074.00
                    },
                    elements: [
                        {
                            title: 'Procesador AMD Ryzen™ Threadripper 3990X',
                            subtitle: 'Procesador AMD',
                            quantity: 1,
                            price: 3000,
                            currency: 'GTQ',
                            image_url: 'https://www.amd.com/system/files/2nd_Gen_AMD_Ryzen_Threadripper_1260x709.jpg'
                        },
                        {
                            title: 'Procesador AMD Athlon™',
                            subtitle: 'Procesador AMD',
                            quantity: 1,
                            price: 1000,
                            currency: 'GTQ',
                            image_url: 'https://as.com/meristation/imagenes/2018/09/18/noticia/1537295640_986696_1541686727_sumario_normal.png'
                        }
                    ]
                }
            }
        }
    };
    callSendApi(messageData);
}

module.exports = { receipt };