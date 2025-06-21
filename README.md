# La tienda del borojó - MongoDB

## Descripción 

Este proyecto implementa una base de datos MongoDB para "La tienda del borojó", una tienda especializada en productos derivados del borojó.

## Tienda

Comercializa diversos productos como:
- Frutas frescas y deshidratadas
- Bebidas (jugos, concentrados, cerveza artesanal)
- Alimentos (mermeladas, galletas, compotas)
- Productos cosméticos (aceites)
- Postres (helados)

El sistema permite gestionar el inventario, registrar ventas, mantener información de clientes y proveedores, y generar reportes de análisis.

## Estructura de la base de datos

### Colecciones:

- **productos**: Información de productos disponibles
- **clientes**: Datos de clientes y sus preferencias
- **ventas**: Registro de transacciones de venta
- **proveedores**: Información de proveedores
- **inventario**: Control de stock por lotes

## Instrucciones para ejecutar
1. **Configurar la base de datos:**
  ``
  use tiendaborojo
  ``

2. **Insertar datos iniciales:**
    ``
    db.coleccion.insertMany({json})
    ``
va a variar la "coleccion" dependiendo la especificada y el "json" debe insertarse de acuerdo a la coleccion, se encuentran en cada uno de los archivos json agregados