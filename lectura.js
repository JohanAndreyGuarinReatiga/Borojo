//   Lectura
// Consultar los productos con stock > 20 unid.
db.productos.find({ stock: { $gt: 20 } })

// Encontrar clientes que no han comprado aún ningún producto.
db.clientes.find({ compras: { $size: 0 } })