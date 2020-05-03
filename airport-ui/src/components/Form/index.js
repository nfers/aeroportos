import React from 'react';
import { Form } from '@unform/web';
import Input from './Input';


export default function Forms() {
  function handleSubmit(data) {
    console.log(data);
    // { email: 'test@example.com', password: '123456' }
  }
  return (
    <Form onSubmit={handleSubmit}>
      <p>
      <label>Nome do Areoporto: </label>
      <Input name="name" type="name" />
      </p>
      <p>
      <label>Cidade do Areoporto: </label>      
      <Input name="city" type="city" />
      </p>
      <button type="submit">gravar</button>
    </Form>
  )
};








// export default function Form() {
//  async function handleSubmit(data) {
//     console.log(data);
//   }

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Input name="name" type="name" />
//       <Input name="city" type="city" />

//       <button type="submit">Gravar</button>
//     </Form>
//   );
// }