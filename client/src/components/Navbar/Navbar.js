import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Navbar.css";
import { logoutUser } from "../../Redux/actions/userAction";
import { changeLanguage } from "../../Redux/actions/changingLanguage";

const Navbar = () => {
  const dispatch = useDispatch();
  const currentUserState = useSelector(
    (state) => state.loginUserReducer.currentUser
  );
  const currentLanguage = useSelector(
    (state) => state.languageReducer.changeToChakmaLange
  );

  const { name } = currentUserState;

  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" to="/">
            Chittagong Hill tracts
          </Link>
          <div
            className="collapse navbar-collapse left_navbar"
            id="navbarTogglerDemo03"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/Education/61853147b55f903ed872b2e7">
                  Chakma Alphabet
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Education/61855355035620151820ac13">
                  Translation
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/articles">
                  Articles
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tourguides">
                  Tour Guides
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/review">
                  Review
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ">
              <li className="nav-item">
                <div class="dropdown">
                  <Link
                    className="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Languages
                  </Link>

                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li onClick={() => dispatch(changeLanguage(true))}>
                      <Link className="dropdown-item" href="#">
                        Chakma
                      </Link>
                    </li>
                    <li onClick={() => dispatch(changeLanguage(false))}>
                      <Link className="dropdown-item" href="#">
                        English
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                {name ? (
                  <Link className="nav-link active">{name}</Link>
                ) : (
                  <Link className="nav-link " to="/auth">
                    Login/registration
                  </Link>
                )}
              </li>
              <li onClick={() => dispatch(logoutUser())} className="nav-item">
                <Link className="nav-link">logout</Link>
              </li>
            </ul>
            {/* <form className="d-flex">
              <button className="btn btn-outline-success" type="submit">
                <Link className="article_link" to="/articles">
                  Articles
                </Link>
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
