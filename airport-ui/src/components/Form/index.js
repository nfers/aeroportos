import React, { useState, Fragment } from 'react';
import { Form } from '@unform/web';
import api from '../../services/api'
import Input from './Input';
import Simulacao from '../Simulacao/index';
// {passar os parametros para o componente de simulacao ver e fazer a requisiao}

function Forms() {
  const [parametros, setParametros] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false)

  function handleSubmit(data) {
    const params = data;
    api.get('/airports/simulacao', { params: params })
      .then(({ data }) => {
        return setParametros(data)
      })  
  }

  return (
    <>
      <div className="form-group row">
        <Form onSubmit={handleSubmit}>
          <p>
            <label>Quantidade de Areoportos: </label>
            <Input name="qtdAeroportos" type="qtdAeroportos" />
            <small id="qtdAeroportos" className="form-text text-muted">Informe um valor maior que 3.</small>
          </p>
          <p>
            <label>Quantidade de Nuvens: </label>
            <Input name="qtdNuvens" type="qtdNuvens" />
            <small id="qtdNuvens" className="form-text text-muted">Informe um valor maior que 4.</small>
          </p>
          <button className="btn btn-dark" type="submit">Realizar Simulação</button>
        </Form>

      </div>
    <div className="conteiner m5">
      <button className="btn btn-dark" type="submit" onClick={() => setIsModalVisible(true)} >Mostrar Grid</button>
      {isModalVisible ? (
        
        <Simulacao value={parametros}>
          {parametros}
        </Simulacao>
      ) : null}
      <div>

      </div>
      </div>

    </>
  )
};

export default Forms;