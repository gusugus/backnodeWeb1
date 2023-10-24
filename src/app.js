const express = require("express")
const productos = require("./routes/producto")
const app = express();
app.use(express.json());
const PORT = 3308;

app.use("/productos", productos);

app.listen(PORT, ()=>{
    console.log('Ejecutando en puerto ');
    console.log(PORT);
});