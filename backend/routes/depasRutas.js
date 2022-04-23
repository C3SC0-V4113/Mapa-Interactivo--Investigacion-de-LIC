const express=require('express')
const router=express.Router()
const{getDepa,setDepa,deleteDepa}=require('../controllers/depasController')

router.route('/').get(getDepa).post(setDepa)
router.route('/:id').delete(deleteDepa)

module.exports=router