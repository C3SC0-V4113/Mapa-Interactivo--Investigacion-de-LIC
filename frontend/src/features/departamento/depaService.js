import axios from 'axios'

const API_URL='/api/departamentos/'

//Obtener los Departamentos
const getDepa=async()=>{
    const response=await axios.get(API_URL)

    return response.data
}

const depaService={
    getDepa,
}

export default depaService