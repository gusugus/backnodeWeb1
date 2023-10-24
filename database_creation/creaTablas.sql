CREATE TABLE PROVEEDOR(id_proveedor INT AUTO_INCREMENT, nombre VARCHAR(200), PRIMARY KEY(id_proveedor));
CREATE TABLE MARCA(id_marca INT AUTO_INCREMENT, nombre VARCHAR(200), PRIMARY KEY(id_marca));
CREATE TABLE CATEGORIA(id_categoria INT AUTO_INCREMENT, nombre VARCHAR(200), PRIMARY KEY(id_categoria));

CREATE TABLE PRODUCTO (id_producto INT AUTO_INCREMENT, nombre VARCHAR(100), proveedor_id INT, precio FLOAT, 
descripcion VARCHAR(255),fecha_elaboracion DATE, fecha_caducidad DATE, marca_id INT, 
categoria_id INT, lote int, stock int, PRIMARY KEY(id_producto), 
FOREIGN KEY(proveedor_id) REFERENCES PROVEEDOR(id_proveedor),
FOREIGN KEY(categoria_id) REFERENCES CATEGORIA(id_categoria),
FOREIGN KEY(marca_id) REFERENCES MARCA(id_marca) );

