import React from 'react';
import { Link } from 'react-router-dom';
import Page404 from '../../../assets/err404.png';


const PageNotFound = () => {
  return (
    <>
      <img src={Page404} alt="notfound"  />
      <p style={{ textAlign: "center" }}>
        <Link to="/">Voltar à página Inicial</Link>
      </p>
    </>
  )
}

export default PageNotFound;