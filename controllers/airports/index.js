'use strict';
//Rota de Aeroportos
const Airport = require('../../models/airports');
const async = require('async');

module.exports = function (router) {

    router.get('/', async function (req, res) {
        const aiports = await Airport.find({});

        return res.json(aiports);
    });

    router.post('/', async function (req, res) {
        const airports = await Airport.create(req.body)

        return res.json(airports);
    });

    router.delete('/:id', async function (req, res) {
        const { id } = await Airport.deleteOne(req.params)

        return res.json({sucess : `Aeroporto ${airports.name} deletado com sucesso!`});
    });


};