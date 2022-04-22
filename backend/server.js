const express=require("express");
const path=require("path");
const exphbs=require("express-handlebars");

//Inicializacion
const app=express();

//Configuraciones
/*Para que el puerto sea determinado a 4000 o el que el servidor escoga */
app.set("port",process.env.PORT||4000);
/*Para encontrar la carpeta de vistas */
app.set("views", path.join(__dirname,"views"));
app.engine(".hbs",exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"),"layout"),
    partialsDir: path.join(app.get("views"),"partials"),
    extname:".hbs"
}));
app.set("view engine",".hbs");

//Middleware
app.use(express.urlencoded({extended: false}));

//Variables Globales


//Rutas
app.use(require("./routes/index.rutas"));

//Archivos Estaticos
app.use(express.static(path.join(__dirname,"public")));

module.exports=app;