import { React } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navbar d-flex container align-items-center justify-content-between">
      <Link to={"/itemList"}>
        <div className="d-flex align-items-center">
          <img
            src="https://img.freepik.com/vector-gratis/carro-tienda-edificio-tienda-dibujos-animados_138676-2085.jpg?w=2000"
            alt=""
            height={125}
          />
          <h2>NombreTienda</h2>
        </div>
      </Link>

      <ul className="d-flex justify-content-around">
        <Link to={"/compus"}>
          <li className="ms-3 me-3">Computadoras</li>
        </Link>

        <Link to={"/celulares"}>
          <li className="ms-3 me-3">Celulares</li>
        </Link>
      </ul>
    </div>
  );
};
