const indexCtrl={};

indexCtrl.renderIndex=(request,response)=>{
    response.render("index")
}

/*indexCtrl.renderPC=(request,response)=>{
    response.text("os")
}

indexCtrl.renderPanas=(request,response)=>{
    response.text("grupo")
}*/

module. exports=indexCtrl;