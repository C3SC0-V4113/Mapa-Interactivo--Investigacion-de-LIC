const indexCtrl={};

indexCtrl.renderIndex=(request,response)=>{
    response.render("index")
}

indexCtrl.renderAhuachapan=(request,response)=>{
    response.render("departamentos",{id:0});
}

indexCtrl.renderCabañas=(request,response)=>{
    response.render("departamentos",{id:1})
}

indexCtrl.renderChalate=(request,response)=>{
    response.render("departamentos",{id:2})
}

indexCtrl.renderCusca=(request,response)=>{
    response.render("departamentos",{id:3})
}

indexCtrl.renderLiber=(request,response)=>{
    response.render("departamentos",{id:4})
}

indexCtrl.renderPaz=(request,response)=>{
    response.render("departamentos",{id:5})
}

indexCtrl.renderUnion=(request,response)=>{
    response.render("departamentos",{id:6})
}

indexCtrl.renderMorazan=(request,response)=>{
    response.render("departamentos",{id:7})
}

indexCtrl.renderMiguel=(request,response)=>{
    response.render("departamentos",{id:8})
}

indexCtrl.renderSivar=(request,response)=>{
    response.render("departamentos",{id:9})
}

indexCtrl.renderVicente=(request,response)=>{
    response.render("departamentos",{id:10})
}

indexCtrl.renderSantaA=(request,response)=>{
    response.render("departamentos",{id:11})
}

indexCtrl.renderSonso=(request,response)=>{
    response.render("departamentos",{id:12})
}

indexCtrl.renderUsulu=(request,response)=>{
    response.render("departamentos",{id:13})
}

module.exports=indexCtrl;