import axios from 'axios'

const API_URL='/api/departamentos/'

//Obtener los Departamentos
const getDepaId=async(depaId)=>{
    console.info(depaId);
    const response=await axios.request(API_URL+depaId)

    return response.data
}

const getDepas=async()=>{
    const response=await axios.request(API_URL)
    return response.data
}

const depaService={
    getDepaId,
    getDepas,
}

export default depaService