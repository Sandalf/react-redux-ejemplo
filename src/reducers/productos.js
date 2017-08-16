import * as actionTypes from '../constants/actionTypes';

const initialState = ["Manzanas","Leche","Frijoles"];

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.PRODUCTOS_SET:
      return setProductos(state, action);
    case actionTypes.PRODUCTOS_REMOVE:
      return removeProducto(state, action);
    default:
      return state;
  }
}

export function setProductos(state, action) {
  const { producto } = action;
  return [...state,producto];
}

export function removeProducto(state, action) {
  const { indice } = action;
  console.log([...state.slice(0,indice),...state.slice(indice+1)]);
  return [...state.slice(0,indice),...state.slice(indice+1)];
}
