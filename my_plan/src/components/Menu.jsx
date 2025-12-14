import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/menu.css";

function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const openNav = () => setIsOpen(true);
    const closeNav = () => setIsOpen(false);

    return (
        <>
            {!isOpen && (
                <span
                    style={{
                        fontSize: "50px",
                        cursor: "pointer",
                        position: "fixed",
                        top: "10px",
                        right: "10px",
                        zIndex: 1000,
                        color: "white"
                    }}
                    onClick={openNav}
                >
                    &#9776;
                </span>
            )}

            <div id="mySidenav" className={`sidenav ${isOpen ? "sidenav-open" : ""}`}>
                <span className="closebtn" onClick={closeNav}>
                    &times;
                </span>
                <Link to="/planning" onClick={closeNav}>Planning</Link>
                <Link to="/services" onClick={closeNav}>Services</Link>
                <Link to="/clients" onClick={closeNav}>Clients</Link>
                <Link to="/contact" onClick={closeNav}>Contact</Link>
            </div>
        </>
    );
}

export default Menu;
