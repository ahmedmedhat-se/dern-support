import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const routes = [
        { path: '/services', name: 'Services' },
        { path: '/installations', name: 'Installations' },
        { path: '/products', name: 'Products' },
        { path: '/contact', name: 'Contact Us' },
        { path: '/login', name: 'Login' },
        { path: '/register', name: 'Register' },
    ];

    return (
        <nav className="navbar navbar-expand-lg navbar-dark p-4 fixed-top shadow-sm">
            <div className="container">
                <Link className='navbar-brand text-dark' to='/'>
                    <strong>Dern Support IT</strong>
                </Link>
                <button 
                    className="navbar-toggler bg-dark" 
                    type="button" 
                    data-bs-toggle="offcanvas" 
                    data-bs-target="#offcanvasNavbar" 
                    aria-controls="offcanvasNavbar"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="offcanvas offcanvas-end text-dark" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Dern Support IT</h5>
                        <button 
                            type="button" 
                            className="btn-close btn-close-white" 
                            data-bs-dismiss="offcanvas" 
                            aria-label="Close"
                        ></button>
                    </div>

                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                            {routes.map((route, index) => (
                                <li className="nav-item" key={index}>
                                    <Link className="nav-link text-dark text-uppercase" to={route.path}>
                                        {route.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;