import Logo from "../Img/Logo.jpg";
import "../styles/Header.css";

export default function NavbarBootstrap() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light header">
        <div className="container-fluid d-flex justify-content-between">
          <a className="navbar-brand" href="/historias">
            <img src={Logo} alt="Logo" className="img-fluid" style={{ width: "100px", height: "auto" }} />
          </a>

          <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link nav-link1" href="/historias">Historias</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link2" href="/contacto">Comparte tu historia</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled nav-link2" href="#" tabIndex="-1" aria-disabled="true">Videos</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

  //verificar ms me del menu hamburguesa y del logo, cambie a container-fluid d-flex justify-contentn-between
  
  
