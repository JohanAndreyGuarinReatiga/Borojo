// Aggregation Framework con Pipelines

// 1. Mostrar un listado de los productos más vendidos (suma total de unidades vendidas por producto).
db.ventas.aggregate([{ $unwind: "$productos" },{$group: {_id: "$productos.productoId",totalVendido: { $sum: "$productos.cantidad" },},}])

// 2. Agrupar clientes por cantidad de compras realizadas.
db.clientes.aggregate([{$project: {cantidadCompras: { $size: "$compras" }}},{$group: {_id: "$cantidadCompras",cantidadClientes: { $sum: 1 }}}])
  
// 3. Mostrar el total de ventas por mes (usa `$group` y `$month`).


// 4. Calcular el promedio de precios por categoría de producto.


// 5. Mostrar los 3 productos con mayor stock (orden descendente con `$sort` y `$limit`).

db.productos.aggregate([{ $sort: { stock: -1 } },{ $limit: 3 },{$project: {_id: 0,nombre: 1,categoria: 1,stock: 1,precio: 1,},},])