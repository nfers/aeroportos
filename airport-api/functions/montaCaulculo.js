'use strict';

const async = require('async');

module.exports = async function montaCalculo (aeroporto) {
      const matriz = [];


    for (let y = 0; y < aeroporto.altura; y++) {
        const eixoX = [];
        for (let x = 0; x < aeroporto.largura; x++) {
            eixoX.push({
                isAeroporto: false,
                isNuvem: false,
            })
        }
        matriz.push(eixoX);
    }


    for (let i = 0; i < aeroporto.qtdAeroportos; i++) {
        let foiAtribuido = false;
        do {
            const x = Math.floor(Math.random() * aeroporto.largura);
            const y = Math.floor(Math.random() * aeroporto.altura);

            if (!matriz[y][x].isAeroporto && !matriz[y][x].isNuvem) {
                matriz[y][x].isAeroporto = true;
                foiAtribuido = true;
            }
        } while (!foiAtribuido);
    }


    for (let i = 0; i < aeroporto.qtdNuvens; i++) {
        let foiAtribuido = false;
        do {
            const x = Math.floor(Math.random() * aeroporto.largura);
            const y = Math.floor(Math.random() * aeroporto.altura);

            if (!matriz[y][x].isAeroporto && !matriz[y][x].isNuvem) {
                matriz[y][x].isNuvem = true;
                foiAtribuido = true;
            }
        } while (!foiAtribuido);
    }

    //save matriz; 

    const simulacoes = [
        {
            dia: 1,
            matriz: JSON.parse(JSON.stringify(matriz)),
        }
    ];

    let possuiAeroportoSemNuvens = true;

    let dia = 1;
    do {
        dia++;

        for (const [indexEixoY, eixoY] of matriz.entries()) {
            for (const [indexEixoX, eixoX] of eixoY.entries()) {
                if (eixoX.isNuvem && eixoX.createAt !== dia) {

                    //horizontal a esquerda
                    if (matriz[indexEixoY][indexEixoX - 1] && !matriz[indexEixoY][indexEixoX - 1].isNuvem) {
                        matriz[indexEixoY][indexEixoX - 1].isNuvem = true
                        matriz[indexEixoY][indexEixoX - 1].createAt = dia;
                    }

                    //horizontal a direita
                    if (matriz[indexEixoY][indexEixoX + 1] && !matriz[indexEixoY][indexEixoX + 1].isNuvem) {
                        matriz[indexEixoY][indexEixoX + 1].isNuvem = true;
                        matriz[indexEixoY][indexEixoX + 1].createAt = dia;
                    }

                    //vertical para baixo
                    if (matriz[indexEixoY - 1] && !matriz[indexEixoY - 1][indexEixoX].isNuvem) {
                        matriz[indexEixoY - 1][indexEixoX].isNuvem = true;
                        matriz[indexEixoY - 1][indexEixoX].createAt = dia;
                    }

                    //vertical para cima
                    if (matriz[indexEixoY + 1] && !matriz[indexEixoY + 1][indexEixoX].isNuvem) {
                        matriz[indexEixoY + 1][indexEixoX].isNuvem = true;
                        matriz[indexEixoY + 1][indexEixoX].createAt = dia;
                    }
                }
            }
        }

        simulacoes.push({
            dia,
            matriz: JSON.parse(JSON.stringify(matriz))
        })

        possuiAeroportoSemNuvens = false;

        for (const [y, eixoY] of matriz.entries()) {
            for (const [x, eixoX] of eixoY.entries()) {

                if (eixoX.isAeroporto && !eixoX.isNuvem) {
                    possuiAeroportoSemNuvens = true;
                }
            }
        }

    } while (possuiAeroportoSemNuvens);

    return simulacoes


};

