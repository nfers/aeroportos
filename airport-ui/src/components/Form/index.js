import React from 'react';
import { Form } from '@unform/web';
import Input from './Input';


export default function Forms() {
  function handleSubmit(data) {
    console.log((data));
  }
  return (   
    <div className="form-group row">
      <Form onSubmit={handleSubmit}>
        <p>
          <label>Quantidade de Areoportos: </label>
          <Input name="qtdAeroportos" type="qtdAeroportos" />
          <small id="qtdAeroportos" class="form-text text-muted">Informe um valor maior que 3.</small>
        </p>
        <p>
          <label>Quantidade de Areoporto: </label>
          <Input name="qtdNuvens" type="qtdNuvens" />
          <small id="qtdNuvens" class="form-text text-muted">Informe um valor maior que 4.</small>
        </p>
        <button className="btn btn-dark" type="submit">Realizar Simulação</button>
      </Form>
    </div>
  )
  };