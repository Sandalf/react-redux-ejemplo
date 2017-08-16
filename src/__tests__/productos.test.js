import { removeProducto } from '../reducers/productos.js';

describe('eliminar producto', () => {
  it('deberia eliminar un producto del arreglo', () => {
    let estado = ["Manzana","Tortillas","Leche"];
    let action = { indice: 1 };

    expect(removeProducto(estado, action)).toMatchSnapshot();
  });
});