import React from 'react';
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from '../context/UserContextProvider';
import { IMAGE_URL } from '../utils/Links';


function NavBar() {
    const { token, user } = useContext(UserContext);
    return (
        token === null ? null :
            <nav className="navbar navbar-expand-xxl navbar-light bg-light">


                <div className="container-fluid">

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <Link className="navbar-brand mt-2 mt-lg-0" to="/">
                            <h2>Salvadorean Flavor</h2>
                        </Link>

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/recipes">Recipes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/ingredients">Ingredients</Link>
                            </li>
                        </ul>


                    </div>

                    <div className="d-flex align-items-center">


                        <div className="dropdown ">

                            <button
                                className="dropdown-toggle btn btn-outline-secondary hidden-arrow "
                                id="navbarDropdownMenuAvatar"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"

                                style={{ width: "200px" }}
                            >
                                <img
                                    src={`${IMAGE_URL}user/${user?.image?.image}`}
                                    className="rounded-circle"
                                    height="50"
                                    width="50"
                                    alt="Black and White Portrait of a Man"
                                    loading="lazy"
                                />&nbsp;{user?.name}
                            </button>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownMenuAvatar"
                            >
                                <li>
                                    <Link className="dropdown-item" to="#">My profile</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="#">Settings</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="#">Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>


                </div>





            </nav>

    );
}

export default NavBar;