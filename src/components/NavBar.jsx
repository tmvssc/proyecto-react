import { NavLink } from "react-router-dom";
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <NavLink to="/" className="navbar-brand">MiSitio</NavLink>
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Catalogo" className="nav-link">Catalogo de productos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Carrito" className="nav-link">Carrito</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Login" className="nav-link">Inicio de sesion</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Contacto" className="nav-link">Contacto</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}