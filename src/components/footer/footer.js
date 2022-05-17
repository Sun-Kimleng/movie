import { Link } from 'react-router-dom';
import './footer.css'

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footer-container">
                Copyright 2022 by <Link to="#" className="linkk">Sun Kimleng</Link>. All Rights Reserved.
            </div>
        </div>
     );
}
 
export default Footer;