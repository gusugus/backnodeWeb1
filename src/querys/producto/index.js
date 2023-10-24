const connection = require("../../connection");
const getAllProductos = async() => {
    const strQuery = "SELECT prod.id_producto AS id, prod.nombre, "+
    " (select nombre from PROVEEDOR prov WHERE prod.proveedor_id = prov.id_proveedor) proveedor, "+
    " ROUND(prod.precio,2) AS precio, prod.descripcion, DATE_FORMAT(prod.fecha_elaboracion,'%d/%m/%Y') AS fecha_elaboracion, "+
    " DATE_FORMAT(prod.fecha_caducidad, '%d/%m/%Y')AS fecha_caducidad, prod.marca_id, "+
    " prod.categoria_id, prod.lote, prod.stock "+
    " FROM PRODUCTO prod ";
const [query] = await connection.execute(strQuery);
return query;
};

const getProductoById = async(id) => {
    const strQuery = "SELECT prod.id_producto AS id, prod.nombre, "+
    " (select nombre from PROVEEDOR prov WHERE prod.proveedor_id = prov.id_proveedor) proveedor, "+
    " round(prod.precio,2) as precio, prod.descripcion, DATE_FORMAT(prod.fecha_elaboracion, '%d/%m/%Y') AS fecha_elaboracion, "+
    " DATE_FORMAT(prod.fecha_caducidad, '%d/%m/%Y') AS fecha_caducidad, prod.marca_id, "+
    " prod.categoria_id, prod.lote, prod.stock "+
    " FROM PRODUCTO prod ";
    const strWhere = " WHERE id_producto = ?";
    const [query] = await connection.execute(strQuery+strWhere, [id]);
    return query;
}

const createProducto = async(objProducto)=>{
    const strQuery = "INSERT INTO PRODUCTO (nombre, proveedor_id, precio, descripcion, fecha_elaboracion, fecha_caducidad,"+
        "marca_id, categoria_id, lote, stock) VALUES (?,?,?,?,?,?,?,?,?,?)"
    const [query] = await connection.execute(strQuery, [objProducto.nombre, objProducto.proveedor, objProducto.precio,
    objProducto.descripcion, objProducto.fecha_elaboracion, objProducto.fecha_caducidad,
    objProducto.marca_id, objProducto.categoria_id, objProducto.lote, objProducto.stock]);
    const item = await getProductoById(query.insertId);
    return item;
}

const updateProducto = async(objProducto)=>{
    const strQuery = "UPDATE PRODUCTO SET nombre = ?, precio=?, descripcion=?, fecha_elaboracion=?, fecha_caducidad=?"+
    "marca_id=?, categoria_id=?, lote=?, stock=? where id=?";
    const item = await getProductoById(objProducto.id, [objProducto.nombre, objProducto.precio, objProducto.descripcion, objProducto.fecha_elaboracion,
    objProducto.fecha_caducidad, objProducto.marca_id, objProducto.categoria_id, objProducto.lote, objProducto.stock, objProducto.id]);
    if(item.length===0)
    {
        return null;
    }
    const [query] = await connection.execute("UPDATE ")
}

module.exports = {getAllProductos, 
    getProductoById, createProducto, updateProducto}