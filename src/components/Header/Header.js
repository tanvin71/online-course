import React from 'react';
import'./Header.css';

const Header = () => {
    return (
        <div>
            <nav className="bg-primary">
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/course">Course</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;