import React, { useState } from 'react';
import api from '../../services/api';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';


function Simulacao() {

  const [response, setResponse] = useState('');

  if (!response) {

    api.get('/airports/simulacao')
      .then(({ data }) => {
        setResponse(data);
      })
  }


  if (response && response.success) {
    console.log(response.length)
    const grid = response.data.map((simulacao, simulacaoIndex) => {

      const rows = simulacao.matriz.map((eixoY, index) => {
        const tds = eixoY.map((eixoX, index) => {
          let campoType = '.';
          if (eixoX.isNuvem) {
            campoType = <i classNameName="medium material-icons">wb_cloudy
            </i>;
          }
          else if (eixoX.isAeroporto) {
            campoType = <i classNameName="medium material-icons">local_airport</i>;
          }

          return (<td key={'td' + index}>{campoType}</td>)
        })

        return (<tr key={'tr' + index}>{tds}</tr>);

      })

      return (
        <div key={'simulacao' + simulacaoIndex} classNameName="row">
          <div className="divider"></div>
          <div className="section">
            <h5>dia: {simulacao.dia}</h5>

          </div>
          <div className="col s1">
            <Table responsive="lg"><thead>{rows}</thead></Table></div>

        </div>
      )
    })

    return (<div>{grid}</div>)
  }
  else {

    return (<div>
      <span className="sr-only">Carregando...</span>
      <Spinner animation="border" role="status"></Spinner></div>)
  }
}

export default Simulacao;
