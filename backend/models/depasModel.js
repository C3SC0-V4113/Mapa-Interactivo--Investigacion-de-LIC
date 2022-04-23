const mongoose=require('mongoose')

const muniSchema=mongoose.Schema(
    {
        Nombre:{
            type: String,
            default: undefined,
        }
    }
)

const centrosSchema=mongoose.Schema(
    {
        Nombre:{
            type: String,
            required: [true, 'Añadir nombre del Centro Turistico'],
        },
        Imagen:{
            type: String,
            required: [true, 'Añadir imagen del Centro Turistico'],
        }
    }
)

const depasSchema=mongoose.Schema(
    {
        Nombre:{
            type: String,
            required: [true, 'Añadir nombre del departamento'],
        },
        Descripcion:{
            type: String,
            required: [true, 'Añadir información del departamento'],
        },
        Historia:{
            type: String,
            required: [true, 'Añadir historia del departamento'],
        },
        ImagenDepartamental:{
            type: String,
            required: [true, 'Añadir imagen del departamento'],
        },
        Municipios:{
            type: [muniSchema]
        },
        CentrosTuristicos:{
            type: [centrosSchema]
        }
    },
    {
      timestamps: true,
    }
)

module.exports=mongoose.model('el salvador',depasSchema)