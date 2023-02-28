import React from "react";

function Navbar({ currentPage, handlePageChange }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <h2><span className="navbar-text text-light font-weight-bold">Jayden Chapman</span></h2>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
                        href="#about" onClick={() => handlePageChange("AboutMe")}>About Me</a>
                    </li>
                    <li className="nav-item">
                        <a className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} 
                        href="#portfolio" onClick={() => handlePageChange("Portfolio")}>Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} 
                        href="#resume" onClick={() => handlePageChange("Resume")}>Résumé</a>
                    </li>
                    <li className="nav-item">
                        <a className={currentPage === 'ContactMe' ? 'nav-link active' : 'nav-link'} 
                        href="#contact" onClick={() => handlePageChange("ContactMe")}>Contact Me</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;