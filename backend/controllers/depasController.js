const asyncHandler=require('express-async-handler')

const Departamento=require('../models/depasModel')

// @desc    Get departamento
// @route   GET /api/departamento
// @access  Public
const getDepa = asyncHandler(async (req, res) => {
    const depa = await Departamento.find() 
  
    res.status(200).json(depa)
  });


// @desc    Set Departamento
// @route   POST /api/departamento
// @access  Private
const setDepa = asyncHandler(async (req, res) => {
  if (!req.body.Nombre) {
    res.status(400)
    throw new Error('Porfavor añada un campo')
  }

  const depa = await Departamento.create({
    Nombre: req.body.Nombre,
    Descripcion: req.body.Descripcion,
    Historia: req.body.Historia,
    ImagenDepartamental: req.body.ImagenDepartamental,
    Municipios: req.body.Municipios,
    CentrosTuristicos: req.body.CentrosTuristicos,
  })

  res.status(200).json(depa)
})

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteDepa = asyncHandler(async (req, res) => {
    const depa = await Departamento.findById(req.params.id)
  
    if (!depa) {
      res.status(400)
      throw new Error('Departamento no encontrado')
    }

    await depa.remove()
  
    res.status(200).json({ id: req.params.id })
  })
  

  module.exports={
      getDepa,
      setDepa,
      deleteDepa,
  }