import React from 'react';

const PaginaInicial = () => {
  return (
    <>
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="text-center">
            <h5 className="display-4" id="init">Bem vindo ao <strong>Simulador de Nuvens</strong></h5>
          </div>
        </div>
        <div className="container">
          <div className="text-justify">
            <p>
            A pedido do governo, criamos esta aplicação que realiza simulação da quantidade de dias que levará para que todos os aeroportos do país, 
            fiquem cobertor pelas nuvens criadas devido a erupção vulcânica.
            </p>
          </div>  
          <div className="text-justify">
          <p>
            Este cálculo leva em consideração a quantidade de aeroportos e nuvens já avistadas no céu para que seja montado o cálculo com a quantidade de dias, 
            e também após solicitar o cálculo é possível exibir um gráfico que facilita a visualização.         
            <br />
          <div className="text-center">
            <br />
            <a className="btn btn-primary" href="/simular">Clique Para Simular</a>
          </div>
          </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaginaInicial;