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
    document.write(`Código: ${this.codigo}<br>`);
    document.write(`Nombre del Producto: ${this.nombre}<br>`);
    document.write(`Precio: ${this.precio}<br>`);
  }
}
let productos = [];

function agregarProducto() {
  for (let index = 0; index < 3; index++) {
    let codigo = new Date().getTime();
    let nombre = prompt("ingrese el nombre del producto");
    let precio = prompt("ingrese el precio del producto");

    productos.push(new Producto(codigo, nombre, precio));
  }
}

function mostrarDatos() {
  productos.forEach(function (producto) {
    producto.imprimeDatos();
  });
}
