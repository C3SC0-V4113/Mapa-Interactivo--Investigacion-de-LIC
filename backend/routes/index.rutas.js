const {Router}=require("express");
const router=Router();

const { renderIndex, renderAhuachapan, renderCabañas, renderChalate, renderCusca, renderLiber, renderMiguel, renderMorazan, renderPaz, renderSantaA, renderSivar, renderSonso, renderUnion, renderUsulu, renderVicente}=require("../controllers/index.controllers")

/*Para la ruta principal */
router.get("/", renderIndex);

router.get("/Ahuachapan",renderAhuachapan);

router.get("/Cabanas",renderCabañas);

router.get("/Chalatenango",renderChalate);

router.get("/Cuscatlan",renderCusca);

router.get("/La_Libertad",renderLiber);

router.get("/San_Miguel",renderMiguel);

router.get("/Morazan",renderMorazan);

router.get("/La_Paz",renderPaz);

router.get("/Santa_Ana",renderSantaA);

router.get("/San_Salvador",renderSivar);

router.get("/Sonsonate",renderSonso);

router.get("/La_Union",renderUnion);

router.get("/Usulutan",renderUsulu);

router.get("/San_Vicente",renderVicente);

module.exports=router;