import React from "react";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand logo fs-4 text-black" href="#home">
                    <img src="https://lh3.googleusercontent.com/drive-viewer/AAOQEOSC_8MPp_SSavFyB80_sfZyr5h5XQvs7-xIx2y7az3VXBWnZaduBqzU5PD1qAzD3Ji3rEKDL36iKLuMb3iSmoKdd6Dx=w1366-h657" alt="my-logo" className="my-logo mx-2 ms-3" />
                    <span className="my-name">Amine Loubar</span>
                </a>
                <button className="menu-btn border-0 p-2 d-lg-none bg-transparent text-black" title="Menu">
                    <img src="https://lh3.googleusercontent.com/drive-viewer/AAOQEOQ1AGnQbOfefxSYBVCoFVuvzzwJaUaZsNrEc6NQUS9QnpUiEuRkipqRjTVw5vcNExpfqQSRl5fk-lawxHC3tNX6tcOplg=w1366-h657" alt="menu" width={"25px"} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"/> 
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
