INSERT INTO PROVEEDOR(nombre) VALUES ('proveedor1');
INSERT INTO PROVEEDOR(nombre) VALUES ('proveedor2');
INSERT INTO PROVEEDOR(nombre) VALUES ('proveedor3');

INSERT INTO MARCA(nombre) VALUES ('marca1');
INSERT INTO MARCA(nombre) VALUES ('marca2');
INSERT INTO MARCA(nombre) VALUES ('marca3');

INSERT INTO CATEGORIA(nombre) VALUES ('CAT1');
INSERT INTO CATEGORIA(nombre) VALUES ('cat2');
INSERT INTO CATEGORIA(nombre) VALUES ('cat3');

INSERT INTO PRODUCTO (nombre, precio, descripcion, fecha_elaboracion, fecha_caducidad, 
proveedor_id, marca_id, categoria_id, lote, stock)
VALUES ('producto1', 12.23, 'DESCRIPCION PROD 1', CURRENT_DATE(), CURRENT_DATE(), 
1, 1, 1, 10001, 100);
