class CarritoCompra {
  constructor() {
    this.productos = [];
  }

  agregarProducto(producto) {
    this.productos.push(producto);
  }

  calcularTotal() {
    return this.productos.reduce(
      (total, producto) => total + producto.precio,
      0
    );
  }

  aplicarDescuento(porcentaje) {
    const total = this.calcularTotal();
    const descuento = total * (porcentaje / 100);
    return total - descuento;
  }
}

describe("CarritoCompra", () => {
  let carrito;

  beforeEach(() => {
    carrito = new CarritoCompra();
  });

  test("Agregar producto al carrito", () => {
    carrito.agregarProducto({ nombre: "Camisa", precio: 20 });
    expect(carrito.productos.length).toBe(1);
  });

  test("Calcular total de la compra", () => {
    carrito.agregarProducto({ nombre: "Camisa", precio: 20 });
    carrito.agregarProducto({ nombre: "Pantalón", precio: 30 });
    expect(carrito.calcularTotal()).toBe(50);
  });

  test("Aplicar descuento al total de la compra", () => {
    carrito.agregarProducto({ nombre: "Camisa", precio: 20 });
    carrito.agregarProducto({ nombre: "Pantalón", precio: 30 });
    expect(carrito.aplicarDescuento(10)).toBe(45);
  });

  test("Aplicar descuento del 100%", () => {
    carrito.agregarProducto({ nombre: "Camisa", precio: 20 });
    expect(carrito.aplicarDescuento(100)).toBe(0);
  });

  test("Aplicar descuento cuando no hay productos en el carrito", () => {
    expect(carrito.aplicarDescuento(10)).toBe(0);
  });
});
