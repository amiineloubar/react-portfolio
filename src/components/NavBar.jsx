import React from "react";
import myLogo from "../assets/other/logo.png";
import menu_icon from "../assets/other/menu_icon.png"

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand logo fs-4 text-black" href="#home">
                    <img src={myLogo} alt="my-logo" className="my-logo mx-2 ms-3" />
                    <span className="my-name">Amine Loubar</span>
                </a>
                <button className="menu-btn border-0 p-2 d-lg-none bg-transparent text-black" title="Menu">
                    <img src={menu_icon} alt="menu" width={"25px"} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"/>
                    {/* <i className="fa-solid fa-bars" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"></i> */}
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link mx-3 text-black-50" aria-current="page" href="#home">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-3 text-black-50" aria-current="page" href="#about">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-3 text-black-50" aria-current="page" href="#services">
                                Services
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-3 text-black-50" aria-current="page" href="#projects">
                                Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-3 text-black-50" aria-current="page" href="#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
