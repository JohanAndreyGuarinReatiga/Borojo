// Aggregation Framework con Pipelines

// 1. Mostrar un listado de los productos más vendidos (suma total de unidades vendidas por producto).
db.ventas.aggregate([{ $unwind: "$productos" },{$group: {_id: "$productos.productoId",totalVendido: { $sum: "$productos.cantidad" },},}])

// 2. Agrupar clientes por cantidad de compras realizadas.
db.clientes.aggregate([{$project: {cantidadCompras: { $size: "$compras" }}},{$group: {_id: "$cantidadCompras",cantidadClientes: { $sum: 1 }}}])
  
// 3. Mostrar el total de ventas por mes (usa `$group` y `$month`).
db.ventas.aggregate([{$group: {_id: { $month: "$fecha" },totalVentas: { $sum: "$total" },cantidadVentas: { $sum: 1 },},},{$project: {_id: 0,mes: "$_id",totalVentas: 1,cantidadVentas: 1,},},{ $sort: { mes: 1 } },])

// 4. Calcular el promedio de precios por categoría de producto.
db.productos.aggregate([{$group: {  _id: "$categoria",precioPromedio: { $avg: "$precio" },cantidadProductos: { $sum: 1 },},},{$project: {_id: 0,categoria: "$_id",precioPromedio: { $round: ["$precioPromedio", 2] },cantidadProductos: 1,},},{ $sort: { precioPromedio: -1 } },])

// 5. Mostrar los 3 productos con mayor stock (orden descendente con `$sort` y `$limit`).

db.productos.aggregate([{ $sort: { stock: -1 } },{ $limit: 3 },{$project: {_id: 0,nombre: 1,categoria: 1,stock: 1,precio: 1,},},])