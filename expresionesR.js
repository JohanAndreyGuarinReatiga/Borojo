// Consultas con Expresiones Regulares

// 1. Buscar productos cuyo nombre empiece por "Boro".
db.productos.find({
    nombre: { $regex: "^Boro" }
  })
  

// 2. Encontrar productos cuyo nombre contenga la palabra "con" 
db.productos.find({
    nombre: { $regex: "con", $options: "i" }
  })
  
// 3.  Encontrar clientes cuyo nombre tenga la letra "z" (insensible a mayúsculas/minúsculas).
  db.clientes.find({
    nombre: { $regex: "z", $options: "i" }
  })
  