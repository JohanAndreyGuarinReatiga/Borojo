// Funciones  

// 1. Definir una función `calcularDescuento(precio, porcentaje)` que devuelva el precio con descuento aplicado.
db.system.js.insertOne({_id: "calcularDescuento", value: new Code(`function(precio, porcentaje) {return precio - (precio * (porcentaje / 100));}`)});
  
// uso
const f1 = db.system.js.findOne({ _id: "calcularDescuento" });
const calcularDescuento = new Function('return ' + f1.value.code)();

calcularDescuento(10000, 15); 


// 2. Definir una función `clienteActivo(idCliente)` que devuelva `true` si el cliente tiene más de 3 compras registradas.



// 3. Definir una función `verificarStock(productoId, cantidadDeseada)` que retorne si hay suficiente stock.
db.system.js.insertOne({_id: "verificarStock",value: new Code(`function(productoId, cantidadDeseada) {const producto = db.productos.findOne({ _id: productoId });return producto && producto.stock >= cantidadDeseada;}`)});
  

const f3 = db.system.js.findOne({ _id: "verificarStock" });
const verificarStock = new Function('return ' + f3.value.code)();
verificarStock(3, 10); 