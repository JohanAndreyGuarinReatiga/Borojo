
// 1. Simular una venta:
const session = db.getMongo().startSession();
const dbSession = session.getDatabase("tiendaborojo");
session.startTransaction();

try{
    const productoId = 3;
    const cantidadDeseada = 2;
    const clienteId = 1;

    const producto = dbSession.productos.findOne({ _id: productoId});
    if (!producto) throw new Error("Producto no encontrado");
    if (producto.stock < cantidadDeseada) {
        throw new Error("Stock no sufiuciente");
       }
       const total = producto.precio * cantidadDeseada;

dbSession.productos.updateOne({_id: productoId},
    {$inc: {stock: -cantidadDeseada}});

dbSession.ventas.insertOne({clienteId, productos: [{ productoId, cantidad: cantidadDeseada}], fecha: new Date(), total});

dbSession.clientes.updateOne({_id : clienteId}, {$push: {compras: cantidadDeseada}})

session.commitTransaction();
print("Venta registrada");
}catch(e){
    session.abortTransaction();
    print("error", e);
}finally{session.endSession();}

// 2. Simular la entrada de nuevo inventario:

const session = db.getMongo().startSession();
const dbSession = session.getDatabase("tiendaborojo");
session.startTransaction();

try {
  const productoId = 11;
  const lote = "L011";
  const cantidadEntrante = 10;

  dbSession.inventario.insertOne({
    _id: productoId,
    productoId,
    lote,
    cantidad: cantidadEntrante,
    entrada: new Date()
  });

  dbSession.productos.updateOne(
    { _id: productoId },
    { $inc: { stock: cantidadEntrante } }
  );

  session.commitTransaction();
  print("inventario actualizado ");
} catch (e) {
  session.abortTransaction();
  print("Error al ingresar", e);
} finally {
  session.endSession();
}

// 3. Hacer una operación de devolución:

const session = db.getMongo().startSession();
const dbSession = session.getDatabase("tiendaborojo");
session.startTransaction();

try{
    const ventaId = 3

    const venta = dbSession.ventas.findOne({_id: ventaId});
    if (!venta) throw new Error("Venta no encontrada");

  const productoId = venta.productos[0].productoId;
  const cantidad = venta.productos[0].cantidad;

  dbSession.productos.updateOne(
    { _id: productoId },
    { $inc: { stock: cantidad } }
  );
    dbSession.ventas.deleteOne({_id: ventaId});

    session.commitTransaction();
    print("devolucion exitosa ");

}catch(e){
    session.abortTransaction();
    print("Error al devolver", e);
  } finally {
    session.endSession();
  }
  