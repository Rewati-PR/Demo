import { Link } from "react-router-dom";
import "./mainStyle.css";
function ProjectNavbar(){
    return (
      <nav className="navbar p-2 pt-3 pb-3 navbar-expand-sm navbar-light bg-light textnavbar">
        <Link className="navbar-brand ms-4 textnav" to="/">
          Restaurant Landing Page
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ms-3">
              <Link className="nav-link" to="#">
                Landing
              </Link>
            </li>
            <li className="nav-item ms-3">
              <Link className="nav-link" to="#">
                Home
              </Link>
            </li>
            <li className="nav-item ms-3">
              <Link className="nav-link" to="#">
                Gallery
              </Link>
            </li>
            <li className="nav-item ms-3">
              <Link className="nav-link" to="#">
                Shop
              </Link>
            </li>
            <li className="nav-item ms-3">
              <Link className="nav-link" to="#">
                Blog
              </Link>
            </li>
            <li className="nav-item ms-3">
              <Link className="nav-link" to="#">
                About
              </Link>
            </li>
            <li className="nav-item ms-3">
              <Link className="nav-link" to="#">
                Team
              </Link>
            </li>
            <li className="nav-item ms-3">
              <Link className="nav-link" to="#">
                Contact
              </Link>
            </li>
            <li className="nav-item ms-3">
              <Link className="nav-link" to="#">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
}
export default ProjectNavbar;
