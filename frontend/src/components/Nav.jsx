function Nav() {
  return (
    <>
      <ul class="nav flex-md-column flex-row nav-fill">
        <a class="navbar-brand" href="/"></a>
        <li class="nav-item">
          <a class="nav-link active btn btn-info espacio" href="/">
            Inicio
          </a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle btn btn-info espacio"
            data-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Departamentos
          </a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="/Ahuachapan">
              Ahuachapan
            </a>
            <a class="dropdown-item" href="/Cabanas">
              Cabañas
            </a>
            <a class="dropdown-item" href="/Cuscatlan">
              Cuscatlán
            </a>
            <a class="dropdown-item" href="/La_Libertad">
              La Libertad
            </a>
            <a class="dropdown-item" href="/La_Paz">
              La Paz
            </a>
            <a class="dropdown-item" href="/Sonsonate">
              Sonsonate
            </a>
            <a class="dropdown-item" href="/San_Salvador">
              San Salvador
            </a>
            <a class="dropdown-item" href="/La_Union">
              La Unión
            </a>
            <a class="dropdown-item" href="/Morazan">
              Morazán
            </a>
            <a class="dropdown-item" href="/San_Miguel">
              San Miguel
            </a>
            <a class="dropdown-item" href="/San_Vicente">
              San Vicente
            </a>
            <a class="dropdown-item" href="/Usulutan">
              Usulután
            </a>
            <a class="dropdown-item" href="/Chalatenango">
              Chalatenango
            </a>
            <a class="dropdown-item" href="/Santa_Ana">
              Santa Ana
            </a>
          </div>
        </li>

        <li class="nav-item">
          <button onclick="switchSheet()">Switch</button>
        </li>
      </ul>
      <div class="row">
        <div class="col-md-3"></div>
      </div>
    </>
  );
}

export default Nav;
