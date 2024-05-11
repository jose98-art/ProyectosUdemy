const carrito = [
    { nombre: "Monitor de 20 pulgadas", precio: 500 },
    { nombre: "Television de 50 pulgadas", precio: 700 },
    { nombre: "Tablet", precio: 300 },
    { nombre: "Audifonos", precio: 200 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Celular", precio: 500 },
    { nombre: "Bocinas", precio: 300 },
    { nombre: "Laptop", precio: 800 },
  ];
  
  // forEach // solo se usa en arreglos sirve para mostrar elementos en pantalla o en consola
carrito.forEach(function(producto){
    console.log(producto);
  })

  // map // solo se usa en arreglos sirve para crear un nuevo arreglo
  carrito.map(function(producto){
    console.log(producto);
  })

  