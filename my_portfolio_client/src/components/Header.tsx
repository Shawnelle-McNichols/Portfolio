import React from "react";

const Header: React.FC = () => {
    return (
            <header id="header">
                <nav className="navbar justify-content-center">
                    <ul className="navbar-nav flex-row">
                        <li className="nav-item mx-2"><a className="nav-link" href="#home">Home</a></li>
                        <li className="nav-item mx-2"><a className="nav-link" href="#about">About Me</a></li>
                        <li className="nav-item mx-2"><a className="nav-link" href="#skills">Skills</a></li>
                        <li className="nav-item mx-2"><a className="nav-link" href="#projects">Projects</a></li>
                        <li className="nav-item mx-2"><a className="nav-link" href="#contact">Contact Me</a></li>
                    </ul>
                </nav>
            </header>
    );
}
export default Header;