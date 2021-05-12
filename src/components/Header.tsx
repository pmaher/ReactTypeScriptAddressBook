import React from 'react';

const Header = () => {
    const renderButtons = () => {
        return null;
    }
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo left">Home</a>
                <ul className="right">
                    {renderButtons()}
                </ul>
            </div>
        </nav>
    )
}

export default Header;