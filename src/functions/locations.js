const { callSendApi } = require('../request/callSendApi');

const showLocations = (senderId) => {
    const messageData = {
        recipient: {
            id: senderId
        },
        message: {
            attachment: {
                type: 'template',
                payload: {
                    template_type: 'generic',
                    elements: [
                        {
                            title: 'Sucursal Portales',
                            subtitle: 'Centro Comercial Portales z.18',
                            image_url: 'https://medias.fashionnetwork.com/image/upload/v1/medias/0d0d141790436da9242c8e991516f8722110877.jpg',
                            buttons: [
                                {
                                    title: 'Ver en el mapa',
                                    type: 'web_url',
                                    url: 'https://goo.gl/maps/BJwmdb6mcLCaSSQs5',
                                    webview_height_ratio: 'tall'
                                }
                            ]
                        },
                        {
                            title: 'Sucursal OaklandMall',
                            subtitle: 'OaklandMall z.10',
                            image_url: 'https://3.bp.blogspot.com/-9JrS0Izs_sM/VkJX3jjjhpI/AAAAAAAAf6U/2_DND3xXEs0/s1600/Untitled_Panorama_0005.jpg',
                            buttons: [
                                {
                                    title: 'Ver en el mapa',
                                    type: 'web_url',
                                    url: 'https://goo.gl/maps/hEeEVwq985zXfk658',
                                    webview_height_ratio: 'tall'
                                }
                            ]
                        },
                        {
                            title: 'Sucursal Cayala',
                            subtitle: 'Ciudad Cayala z.16',
                            image_url: 'https://planosyestilos.com/media/k2/items/cache/3b77d3f73b59742412f393cd0d264b14_L.jpg',
                            buttons: [
                                {
                                    title: 'Ver en el mapa',
                                    type: 'web_url',
                                    url: 'https://goo.gl/maps/gPAVApbqbMSGvVCd7',
                                    webview_height_ratio: 'tall'
                                }
                            ]
                        },
                        {
                            title: 'Sucursal Miraflores',
                            subtitle: 'Centro Comercial Miraflores z.11',
                            image_url: 'https://i.pinimg.com/originals/31/e5/cd/31e5cdaca045b61a6aa49516149cead0.jpg',
                            buttons: [
                                {
                                    title: 'Ver en el mapa',
                                    type: 'web_url',
                                    url: 'https://goo.gl/maps/VBwapfCZ3dm16W13A',
                                    webview_height_ratio: 'tall'
                                }
                            ]
                        }
                    ]
                }
            }
        }
    };
    callSendApi(messageData);
}

module.exports = { showLocations };
