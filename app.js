/* - Escribe una clase **Producto** para crear objetos. 
Estos objetos, deben presentar las **propiedades** código, 
nombre y precio, además del **método** imprimeDatos, el cual 
escribe por pantalla los valores de sus propiedades.
 Posteriormente, cree **tres instancias** de este objeto y 
 guárdalas en un array.
 Por último, utilice el método imprimeDatos para mostrar 
 por pantalla los valores de los tres objetos instanciados.
 */

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimeDatos() {
    document.write(`Código: ${this.codigo}`);
    document.write(`Nombre del Producto: ${this.nombre}`);
    document.write(`Precio: ${this.precio}`);
  }
}

let producto1 = new Producto(012, "Queso", 300);
let producto2 = new Producto(020, "Leche", 190);
let producto3 = new Producto(150, "Coca-Cola", 320);

let arregloProductos = [producto1, producto2, producto3];
