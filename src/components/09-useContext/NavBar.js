import React from 'react';
import { Link, NavLink } from 'react-router-dom'; //NavLink and Link are the same, but NavLink can incorporate independent CSS styles, when active

export const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">


            <NavLink className="navbar-brand" to="/"> useContext </NavLink>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink exact activeClassName="active" to="/" className="nav-link"> Home </NavLink>
                    <NavLink exact activeClassName="active" to="/about"  className="nav-link"> About </NavLink>
                    <NavLink exact activeClassName="active" to="/login"  className="nav-link"> Login </NavLink>
                </div>
            </div>
        </nav>



    )
}
