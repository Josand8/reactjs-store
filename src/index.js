import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Pagina from './componentes/pagina';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Pagina/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// const option1_variants = [red, blue, green, yellow];

// product.option1.forEach(element => {
//   option1_variants.push(element);
// });