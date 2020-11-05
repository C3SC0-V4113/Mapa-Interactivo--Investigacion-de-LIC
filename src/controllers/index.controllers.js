const indexCtrl={};

indexCtrl.renderIndex=(request,response)=>{
    response.render("index")
}

indexCtrl.renderAhuachapan=(request,response)=>{
    response.render("departamentos",{id:0});
}

indexCtrl.renderCabañas=(request,response)=>{
    //response.send("Cabañas");
    response.render("departamentos",{id:1})
}


/*indexCtrl.renderPC=(request,response)=>{
    response.text("os")
}

indexCtrl.renderPanas=(request,response)=>{
    response.text("grupo")
}*/

module.exports=indexCtrl;