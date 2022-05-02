const express=require('express')
const router=express.Router()
const{getDepa,setDepa,deleteDepa,getDepaID}=require('../controllers/depasController')

router.route('/').get(getDepa).post(setDepa)
router.route('/:id').delete(deleteDepa).get(getDepaID)

module.exports=router