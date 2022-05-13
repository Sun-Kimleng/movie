import './header.css'
import {useState} from 'react'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

    return ( 
        <div className="header">
            <div className="navbar">
            
            <div className="brand">
                <Link to='/' className='brand-name'>Movie App</Link>
            </div>

            <div className='all-link'>
                <NavLink className="link" to="#">Hello</NavLink>
                <NavLink className="link" to="#">Hello</NavLink>
            </div>

            </div>
            
        </div>
     );
}
 
export default Header;