import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth/login");
    toast("Logout Successfully");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Keep Secret
          </Link>
          {localStorage.getItem("token") ? (
            <>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">
                      Your Secret's
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      aria-current="page"
                      to="/otherSecret"
                    >
                      Others Secret's
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/user/createSecret">
                      Create Secret
                    </Link>
                  </li>
                </ul>
                <button className="btn btn-primary" onClick={handleLogout}>
                  Log Out
                </button>
              </div>
            </>
          ) : (
            <div className="d-flex">
              <Link
                to="/auth/login"
                role="button"
                className="mx-2 btn btn-primary"
              >
                Log In
              </Link>
              <Link to="/user" role="button" className="mx-2 btn btn-primary">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
