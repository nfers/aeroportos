'use strict';
//Rota de Aeroportos
const Airport = require('../../models/airports');
const async = require('async');
const montaCalculo = require('../../functions/montaCaulculo');

module.exports = function (router) {

    router.get('/', async function (req, res) {
        const aiports = await Airport.find({});

        return res.json(aiports);
    });

    router.post('/', async function (req, res) {
        const airports = await Airport.create(req.body)

        return res.json({ success: true, data: airports});
    });

    router.delete('/:id', async function (req, res) {
        const { id } = await Airport.deleteOne(req.params)

        return res.json({ sucess: `Aeroporto ${airports.name} deletado com sucesso!` });
    });

    router.get('/simulacao', async function (req, res) {
        const aeroporto = {
            qtdAeroportos: 3,
            largura: 10,
            altura: 10,
            qtdNuvens: 4,
        }
        
        const simular = await montaCalculo(aeroporto);

        return res.json({ success: true, data: simular});

    })
};

