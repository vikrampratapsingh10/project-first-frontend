import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
    <div id="n">
    <div id="w">
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/"} className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/registration"} className="nav-link" >
                  Registration
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/form"} className="nav-link" >
                  Link
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled"  tabIndex={-1} aria-disabled="true">
                  Disabled
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
      </div>
      </div>
    </>
  );
}

export default Navbar;