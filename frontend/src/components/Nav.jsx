import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {Nav,Dropdown,NavDropdown,Navbar} from 'react-bootstrap';
import {getDepa,reset} from '../features/departamento/depaSlice'

function Navegador() {
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const { depa, isError, message } = useSelector(
    (state) => state.depa
  )

  useEffect(()=>{
    if (isError) {
      console.log(message)
    }

    dispatch(getDepa())

    return ()=>{
      dispatch(reset())
    }
  },[navigate,isError,message,dispatch])

  return (
    <>
    <Nav className="nav flex-md-column flex-row nav-fill" activeKey="/">
      <Navbar.Brand href="/"></Navbar.Brand>
      <Nav.Item>
        <Nav.Link className='btn btn-info espacio' href="/">Inicio</Nav.Link>
      </Nav.Item>
      <Dropdown as={Nav.Item}>
        <Dropdown.Toggle as={Nav.Link} className='btn btn-info espacio'>Departamentos</Dropdown.Toggle>
        <Dropdown.Menu>
          {
            depa.map((m)=>(
              <Dropdown.Item href={m._id}>{m.Nombre}</Dropdown.Item>
            ))
          }   
        </Dropdown.Menu>
      </Dropdown>
    </Nav>
    </>
  );
}

export default Navegador;
