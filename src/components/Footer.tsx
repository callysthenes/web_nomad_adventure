import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Nomad Adventure. All Rights Reserved.</p>
                <p>Morocco Motorcycle Tours</p>
            </div>
        </footer>
    );
};

export default Footer;
