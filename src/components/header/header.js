import './header.css'
import {useState} from 'react'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

    return ( 
        <div className="header">
            <div className="navbar">
            <NavLink className="link" to="#">Hello</NavLink>
            <NavLink className="link" to="#">Hello</NavLink>
            </div>
            
        </div>
     );
}
 
export default Header;