import { NavLink } from "react-router-dom";
import "./Header.scss" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCartShopping, faHippo, faPhone} from '@fortawesome/free-solid-svg-icons' 

export const Header = () => {

    return(
        <div className="header">
            <NavLink to="/" className="header__item">Home <FontAwesomeIcon icon={faHouse}/></NavLink>
            <NavLink to="/likes" className="header__item">Animals <FontAwesomeIcon icon={faHippo}/></NavLink>
            <NavLink to="/cart" className="header__item">Contacts<FontAwesomeIcon icon={faPhone}/></NavLink>
        </div>
    )   
};