module.exports = async function (context, req) {
    context.log('Función JavaScript procesando una solicitud.');
    context.res = {
        body: "Hola mundo!"
    };
};