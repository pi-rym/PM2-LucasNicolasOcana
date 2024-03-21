const CarritoCompra = require("../index");

describe("CarritoCompra", () => {
  let carrito;

  beforeEach(() => {
    carrito = new CarritoCompra();
  });

  test("Agregar producto al carrito", () => {
    carrito.agregarProducto({ nombre: "REMERA", precio: 20 });
    expect(carrito.productos.length).toBe(1);
  });

  test("Calcular total de la compra", () => {
    carrito.agregarProducto({ nombre: "REMERA", precio: 20 });
    carrito.agregarProducto({ nombre: "BERMUDA", precio: 30 });
    expect(carrito.calcularTotal()).toBe(50);
  });

  test("Aplicar descuento al total de la compra", () => {
    carrito.agregarProducto({ nombre: "REMERA", precio: 20 });
    carrito.agregarProducto({ nombre: "BERMUDA", precio: 30 });
    expect(carrito.aplicarDescuento(10)).toBe(45);
  });

  test("Aplicar descuento del 100%", () => {
    carrito.agregarProducto({ nombre: "REMERA", precio: 20 });
    expect(carrito.aplicarDescuento(100)).toBe(0);
  });

  test("Aplicar descuento cuando no hay productos en el carrito", () => {
    expect(carrito.aplicarDescuento(10)).toBe(0);
  });
});
