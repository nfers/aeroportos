'use strict';

module.exports = function (router) {
console.log('rota avioes');
    router.get('/', async function (req, res) {
        res.send({message: 'Aqui vai a rota de avioes'});
    });


};
