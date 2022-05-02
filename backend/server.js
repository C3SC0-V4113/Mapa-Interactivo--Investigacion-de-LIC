const express=require("express");
const path=require("path");
const dotenv = require('dotenv').config()
const exphbs=require("express-handlebars");
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

//Inicializacion
const app=express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/departamentos', require('./routes/depasRutas'))

// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))
  
    app.get('*', (req, res) =>
      res.sendFile(
        path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
      )
    )
  } else {
    app.get('/', (req, res) => res.send('Please set to production'))
  }
  
//Configuraciones
/*Para que el puerto sea determinado a 4000 o el que el servidor escoga */
//app.set("port",process.env.PORT||4000);
/*Para encontrar la carpeta de vistas */
/*app.set("views", path.join(__dirname,"views"));
app.engine(".hbs",exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"),"layout"),
    partialsDir: path.join(app.get("views"),"partials"),
    extname:".hbs"
}));
app.set("view engine",".hbs");*/

//Middleware
//app.use(express.urlencoded({extended: false}));

//Variables Globales


//Rutas
//app.use(require("./routes/index.rutas"));

//Archivos Estaticos
//app.use(express.static(path.join(__dirname,"public")));

//module.exports=app;

app.listen(port, ()=>console.log(`Servidor ha iniciado en puerto: ${port}`))