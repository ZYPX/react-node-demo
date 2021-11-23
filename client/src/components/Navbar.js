import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';

const MenuItems = [
    {
        title: "Frameworks",
        url: "/",
        cName: "nav-links"
    },
    {
        title: "Installation",
        url: "/install",
        cName: "nav-links"
    },
    {
        title: "Styling",
        url: "/styles",
        cName: "nav-links"
    },
    {
        title: "Demo",
        url: "/demo",
        cName: "nav-links"
    },
    {
        title: "Conclusion",
        url: "/conclusion",
        cName: "nav-links"
    },
    {
        title: "Credits",
        url: "/credits",
        cName: "nav-links"
    }
];

const Navbar = () => {
    
    const [clicked, setClicked] = useState(false);

    const handleClick = () => setClicked(!clicked);
    
    return (
        <nav className="navItems">
            <h1>CPS530</h1>
            <div className="menu-icon" onClick={handleClick}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((items, index) => {
                    return (
                        <li className="urlItem" key={index}>
                            <Link to={items.url} className={items.cName} onClick={handleClick}>
                                {items.title}
                            </Link>
                        </li>
                    )
                })}
                
            </ul>

        </nav>
    )
}

export default Navbar
