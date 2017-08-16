import * as actionTypes from '../constants/actionTypes';

export function setProductos(producto) {
  return {
    type: actionTypes.PRODUCTOS_SET,
    producto
  };
};


export function removeProducto(indice) {
  return {
    type: actionTypes.PRODUCTOS_REMOVE,
    indice
  };
};