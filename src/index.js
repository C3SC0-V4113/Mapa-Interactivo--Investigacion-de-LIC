const app=require("./server");

app.listen(app.get("port"), function(){
    console.log("Escuchando en el puerto: ",app.get("port"));
}); 