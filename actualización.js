// Aumentar en 10 el stock del "Borojó deshidratado".
db.productos.updateOne({ nombre: "Borojó deshidratado" }, { $inc: { stock: 10 } })

// Añadir el tag "bajo azúcar" a todos los de "Bebida".
db.productos.updateMany({ categoria: "Bebida" }, { $push: { tags: "bajo azúcar" } })