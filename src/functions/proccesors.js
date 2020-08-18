const { callSendApi } = require("../request/callSendApi");

const showProccesors = (senderId) => {
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
                            title: 'Procesadores AMD',
                            subtitle: 'Para los usuarios más exigentes y usuarios estándar al momento de trabajar.',
                            image_url: 'https://acf.geeknetic.es/imgri/imagenes/auto/2020/5/11/vjk-19019-amd-ryzen-7-4700g-filtracion-aots-muestra.jpg?f=webp',
                            buttons: [
                                {
                                    type: 'postback',
                                    title: 'Ver procesadores AMD',
                                    payload: 'AMD_PROCCESORS_PAYLOAD'
                                }
                            ]
                        },
                        {
                            title: 'Procesadores Intel',
                            subtitle: 'La innovación de Intel en computación en la nube, centro de datos, IoT y soluciones para PC está revolucionando el mundo.',
                            image_url: 'https://hardzone.es/app/uploads-hardzone.es/2019/09/Intel-Cascade-Lake-X-intro.jpg',
                            buttons: [
                                {
                                    type: 'postback',
                                    title: 'Ver procesadores Intel',
                                    payload: 'INTEL_PROCCESORS_PAYLOAD'
                                }
                            ]
                        }
                    ]
                }
            }
        }
    };
    callSendApi(messageData);
};

const showAMDProccesors = (senderId) => {
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
                            title: 'Procesador AMD Ryzen™ Threadripper 3990X',
                            subtitle: 'Gracias a sus 64 núcleos, el procesador para ordenadores de sobremesa más potente del mundo va a hacer que te olvides del tiempo.',
                            image_url: 'https://www.amd.com/system/files/2nd_Gen_AMD_Ryzen_Threadripper_1260x709.jpg',
                            buttons: [
                                {
                                    type: 'postback',
                                    title: 'Agregar al carrito',
                                    payload: 'THREADRIPPER_PAYLOAD'
                                }
                            ]
                        },
                        {
                            title: 'Procesador AMD Ryzen™ 9',
                            subtitle: 'Rendimiento reconocido y tecnología de procesadores optimizada. Para los jugadores. Para los creadores. Para todos.',
                            image_url: 'https://www.profesionalreview.com/wp-content/uploads/2019/10/Ryzen-9-3950X-es-un-32-mas-potente-que-el-Threadripper-1950X_2.jpg',
                            buttons: [
                                {
                                    type: 'postback',
                                    title: 'Agregar al carrito',
                                    payload: 'RYZEN9_PAYLOAD'
                                }
                            ]
                        },
                        {
                            title: 'Procesador AMD Athlon™',
                            subtitle: 'Sin importar lo que les pidas, las PC equipadas con los procesadores para computadoras de escritorio AMD Athlon™ serie 3000 con tarjetas gráficas Radeon™ ofrecen un rendimiento rápido y confiable.',
                            image_url: 'https://as.com/meristation/imagenes/2018/09/18/noticia/1537295640_986696_1541686727_sumario_normal.png',
                            buttons: [
                                {
                                    type: 'postback',
                                    title: 'Agregar al carrito',
                                    payload: 'ATHLON_PAYLOAD'
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

const showIntelProccesors = (senderId) => {
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
                            title: 'Procesador Intel® Core™ i9-10980XE Extreme Edition',
                            subtitle: 'La plataforma del procesador Intel® Core™ serie X es la plataforma de PC orientada a creadores más moderna: incluye procesadores desbloqueados, la nueva plataforma del procesador Intel® Core™ serie X incorpora los límites del desempeño y está diseñada para flujos de trabajo avanzados de creadores que varían según la necesidad.',
                            image_url: 'https://i0.wp.com/www.madboxpc.com/wp-content/uploads/2019/10/Corei9_X-Series.jpg?fit=1000%2C668&ssl=1',
                            buttons: [
                                {
                                    type: 'postback',
                                    title: 'Agregar al carrito',
                                    payload: 'COREI9X_PAYLOAD'
                                }
                            ]
                        },
                        {
                            title: 'Procesador Intel® Core™ i7',
                            subtitle: 'Los procesadores Intel® Core™ de 10ma Generación equipados con los gráficos Intel® Iris® Plus ofrecen, por primera vez, capacidades de inteligencia artificial (IA) de gran escala en computadoras.',
                            image_url: 'https://www.intel.la/content/dam/products/hero/foreground/badge-9th-gen-core-i7-1x1.png.rendition.intel.web.550.550.png',
                            buttons: [
                                {
                                    type: 'postback',
                                    title: 'Agregar al carrito',
                                    payload: 'COREI7_PAYLOAD'
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

module.exports = { showProccesors, showAMDProccesors, showIntelProccesors };
