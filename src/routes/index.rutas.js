const {Router}=require("express");
const router=Router();

//const { renderIndex, renderPC, renderPanas }=require("../controllers/index.controller")
const { renderIndex }=require("../controllers/index.controllers")

/*Para la ruta principal */
router.get("/", renderIndex);

module.exports=router;