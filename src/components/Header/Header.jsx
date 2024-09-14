import { NavLink } from "react-router-dom";
import "./Header.scss" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCartShopping} from '@fortawesome/free-solid-svg-icons' 

export const Header = () => {

    return(
        <div className="header">
            <NavLink to="/" className="header__item">Home <FontAwesomeIcon icon={faHouse} /></NavLink>
            <NavLink to="/likes" className="header__item">Likes</NavLink>
            <NavLink to="/cart" className="header__item">Cart <FontAwesomeIcon icon={faCartShopping} /></NavLink>
        </div>
    )   
};