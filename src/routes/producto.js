const {Router} = require("express");
const querys = require("../querys/producto");

const router = Router();

router.get("/", async(req,res)=>{
    const query = await querys.getAllProductos();
    return res.status(200).json(query);
});

router.get("/:id", async(req,res)=>{
    const {id} = req.params;
    const query = await querys.getProductoById(id);
    if(query.length === 0)
    {
        return res.status(400).json({message: "Producto no encontrado"});
    }
    return res.status(200).json(query);
});

router.put("/", async(req,res)=>{
const {id, nombre, proveedor_id, precio, descripcion, fecha_elaboracion, fecha_caducidad, marca_id, categoria_id, lote, stock} = req.body;
const objProducto = 
    {
        id: id,
        nombre: nombre,
        proveedor: proveedor_id,
        precio: precio,
        descripcion: descripcion,
        fecha_elaboracion: fecha_elaboracion,
        fecha_caducidad: fecha_caducidad,
        marca_id: marca_id,
        categoria_id: categoria_id,
        lote: lote,
        stock: stock,
    };
    const query = await querys.updateProducto(objProducto);
    if(query===null)
    {
        return res.status(400).json({message: "Producto no encontrado"});
    }
    return res.status(200).json({message: "Producto registrado"});
});

router.post("/", async(req,res)=>{
    const {nombre, proveedor_id, precio, descripcion, fecha_elaboracion, fecha_caducidad, marca_id, 
            categoria_id, lote, stock} = req.body;
    const objProducto = 
    {
        nombre: nombre,
        proveedor: proveedor_id,
        precio: precio,
        descripcion: descripcion,
        fecha_elaboracion: fecha_elaboracion,
        fecha_caducidad: fecha_caducidad,
        marca_id: marca_id,
        categoria_id: categoria_id,
        lote: lote,
        stock: stock,
    };
    const query = await querys.createProducto(objProducto);
    return res.status(200).json(query);
});

module.exports = router;
