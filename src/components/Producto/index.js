import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './index.css';

class Producto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      indice: this.props.indice
    }
  }

  remove = () => {
    this.props.removeProducto(this.state.indice);
  }

  render() {
    return (
      <li className="Producto">   
        <span className="Producto-nombre">{ this.props.producto }</span> <button onClick={ this.remove } className="Producto-remove">x</button>
      </li>
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

export default connect(mapStateToProps,mapDispatchToProps)(Producto);