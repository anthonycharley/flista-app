import { Nav, Navbar } from 'reactstrap';
import { Link } from 'react-router-dom';
// import { useState } from 'react';

// const SignUp = () => {

// };

const NavBar = () => {
    return (
        <>
            <Nav className='navbar navbar-light'>
                <Navbar>
                    <h1 className="main-heading m-3">
                        <Link className='logo' to='/'>Flista</Link>
                    </h1>
                    <Link className='navbarLink' to="/about">About</Link>
                    <Link className='navbarLink' to="/courses">Courses</Link>
                    <Link className='navbarLink' to="/cart">Cart</Link>
                    <Link className='navbarLink' to="/login">Login</Link>
                </Navbar>
            </Nav>
        </>
    );
};

export default NavBar;