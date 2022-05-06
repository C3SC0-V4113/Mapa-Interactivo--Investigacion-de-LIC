import {Nav,Dropdown,NavDropdown,Navbar} from 'react-bootstrap'

function Navegador() {
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
          <Dropdown.Item href="/">Ahuachapan</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Nav>
    </>
  );
}

export default Navegador;
