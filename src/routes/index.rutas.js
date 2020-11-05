const {Router}=require("express");
const router=Router();

//const { renderIndex, renderPC, renderPanas }=require("../controllers/index.controller")
const { renderIndex, renderAhuachapan, renderCabañas}=require("../controllers/index.controllers")

/*Para la ruta principal */
router.get("/", renderIndex);

router.get("/Ahuachapan",renderAhuachapan);

router.get("/Cabanas",renderCabañas);

module.exports=router;