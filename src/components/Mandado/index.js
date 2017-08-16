import React, { Component } from 'react';
import Agregar from '../Agregar';
import ListaProductos from '../ListaProductos';
import './index.css';

class Mandado extends Component {
  render() {
    return (
      <div className="Mandado">
        <h1 className="Mandado-encabezado">Mandado</h1>
        <Agregar/>
        <ListaProductos/>
      </div>
    );
  }
}

export default Mandado;
