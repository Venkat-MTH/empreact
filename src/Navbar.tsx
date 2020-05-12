import React from 'react'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <a className="navbar-brand" href="/">Logo</a>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Employeelist">Employee</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Contact/4">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;