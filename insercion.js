// Inserción
// Insertar un nuevo producto "Chocolatina de borojó"

db.productos.insertOne({
    _id: 11,
    nombre: "Chocolatina de borojó",
    categoria: "Snack",
    precio: 4000,
    stock: 35,
    tags: ["dulce", "energía"],
  })

// Insertar un nuevo cliente "Mario Mendoza"

db.clientes.insertOne({
    _id: 11,
    nombre: "Mario Mendoza",
    email: "mario@email.com",
    compras: [],
    preferencias: ["energético", "natural"],
  })

