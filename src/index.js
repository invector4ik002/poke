import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import CardPoke from './CardPoke';
import Abilities from './Abilities';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <CardPoke/>
    <Abilities/>
  </React.StrictMode>,
  document.getElementById('root')
);

