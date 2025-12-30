import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { user, signOut } = useAuth();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <Link to="/" className="nav-logo">NOMAD ADVENTURE</Link>
                <div className="nav-links">
                    <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                    <Link to="/tours" className={location.pathname.includes('/tours') ? 'active' : ''}>Expeditions</Link>
                    <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>

                    {user ? (
                        <a href="#" onClick={(e) => { e.preventDefault(); signOut(); }}>Logout ({user.user_metadata.full_name?.split(' ')[0]})</a>
                    ) : (
                        <Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>Login</Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
