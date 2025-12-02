import react from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {

    return (
        <>


            <nav className="navbar navbar-expand-lg shadow-sm py-3" style={{ backgroundColor: "#ffffff" }}>
                <div className="container">
                    {/* Brand */}
                    <NavLink to="/" className="navbar-brand d-flex align-items-center text-dark">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/891/891462.png"
                            alt="logo"
                            width="40"
                            height="40"
                            className="me-2"
                        />
                        <span className="fw-bold fs-5">Handmade Bags</span>
                    </NavLink>

                    {/* Toggler for mobile */}
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

                    {/* Links  */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link fw-semibold text-dark" to="/">Home</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link fw-semibold text-dark" to="/New">New</NavLink>
                            </li> */}
                            {/* <li className="nav-item">
                                <NavLink className="nav-link fw-semibold text-dark" to="/Bags">Bags</NavLink>
                            </li> */}
                            {/* <li className="nav-item">
                                <NavLink className="nav-link fw-semibold text-dark" to="/Backpacks">Backpacks</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fw-semibold text-dark" to="/Cosmeticbags">Cosmetic Bags</NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink className="nav-link fw-semibold text-dark" to="/Aboutus">AboutUs</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fw-semibold text-dark" to="/Contact">ContactUs</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fw-semibold text-dark" to="/Product">Products</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link fw-semibold text-dark" to="/Login">Login</NavLink>
                            </li> */}
                        </ul>





                        {/* Action Buttons */}
                        {/* 
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/891/891462.png"
                            alt="logo"
                            width="40"
                            height="40"
                            className="me-2"
                        /> */}
                    </div>
                </div>

            </nav >




        </>
    );
}
export default Navbar;

