import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './index.css';

class Agregar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            valor: ''
        }
    }

    handleChange = (event) => {
        this.setState({ valor: event.target.value  });
    }

    agregar = () => {
        this.props.setProductos(this.state.valor);
        this.setState({ valor: '' });
    }

    render() {
        return (
        <div className="Agregar">   
            <input
                value={ this.state.valor } 
                onChange={ this.handleChange } 
                type="text" 
                placeholder="Nombre de producto"/>

            <button onClick={ this.agregar }>Agregar</button>
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

export default connect(mapStateToProps,mapDispatchToProps)(Agregar);