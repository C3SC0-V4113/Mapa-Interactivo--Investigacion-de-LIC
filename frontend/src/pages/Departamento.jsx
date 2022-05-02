import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getDepa, reset } from '../features/departamento/depaSlice'
import { useSearchParams } from "react-router-dom";

function Departamento(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    /*const [searchParams, setSearchParams] = useSearchParams();
    searchParams.get("id")
    console.log(searchParams)*/

    const { departamento, isLoading, isError, message}=useSelector(
        (state) =>state.depa
    )

    useEffect(() => {
        if (isError) {
          console.log(message)
        }
    
        dispatch(getDepa())
    
        return () => {
          dispatch(reset())
        }
      }, [departamento, navigate, isError, message, dispatch])

    return(
        <>
        <h1>Departamento</h1>
        </>
    )
}

export default Departamento