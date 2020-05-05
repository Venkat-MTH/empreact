import React from 'react'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <a class="navbar-brand" href="/">Logo</a>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/Employeelist">Employee</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;