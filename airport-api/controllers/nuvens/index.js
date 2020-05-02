'use strict';

module.exports = function (router) {

    router.get('/', async function (req, res) {
        res.json({message: 'rota de nuvens'})
    });

    router.post('/api/', async function (req, res) {
        const nuvens = await (req.params)
        
        res.json({message: 'API - Health check ok'})
    });
};
