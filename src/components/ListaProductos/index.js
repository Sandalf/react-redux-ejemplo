import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import Producto from '../Producto';
import './index.css';

class ListaProductos extends Component {
  render() {
    return (
      <div className="ListaProductos"> 
        <ul className="ListaProductos-lista">
          {
            this.props.productos.map( (prod,index) => {
              return <Producto key={ index } indice={ index } producto={ prod }/>
            })
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { productos } = state;
  return {
    productos
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actions,dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ListaProductos);