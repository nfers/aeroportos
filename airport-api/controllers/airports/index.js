'use strict';

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

        try {
            return res.json(
                { success: true, data: airports }
            );
        } catch (error) {
            res.status(400).send(
                console.error(error)
            );
        }
    });

    router.delete('/', async function (req, res) {

        const airport = await Airport.findByIdAndDelete({ _id: req.query.id });

        try {
            return res.json({ sucess: true, data: `Aeroporto ${req.query.id} deletado com sucesso!` })
        } catch (error) {
            res.status(400).send({ sucess: false, data: 'Ocorreu erro :' + error });
        };

    });

    router.get('/simulacao', async function (req, res) {

        const aeroporto = {
            qtdAeroportos: parseInt(req.query.qtdAeroportos),
            largura: 10,
            altura: 10,
            qtdNuvens: parseInt(req.query.qtdNuvens),
            simulacao: []
        };

        const simular = await montaCalculo(aeroporto);

        aeroporto.simulacao = simular;

        const aero = await Airport.create(aeroporto);

        try {
            return res.json({ success: true, data: simular });
        } catch (error) {
            res.status(400).send({ sucess: false, data: error });
        };

    })
};

