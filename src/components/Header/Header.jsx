import "./Header.css"
import logo from "../../assets/logo.png";
import { BsMenuDown } from "react-icons/bs";
import { BsMenuUp } from "react-icons/bs";
import Menu from "../menu/Menu";
import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { EcommerceContext } from "../../api/contextApi";

const Header = ({setPage}) => {
    const {cart} = useContext(EcommerceContext)
    const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="HeaderContainer">
        <div className="HeaderLogo">
            <img src={logo} alt="logo"/>
        </div>
        <nav className="HeaderNav">
            <ul>
                <li><NavLink to="/" className={({isActive}) =>  isActive ? "HeaderActive" : "HeaderNotActive"}>Home</NavLink></li>
                {/* <li><NavLink to="category" className={({isActive}) =>  isActive ? "HeaderActive" : "HeaderNotActive"}>Categories</NavLink></li> */}
                <li><NavLink to="cart" className={({isActive}) =>  isActive ? "HeaderActive" : "HeaderNotActive"}>Cart ({cart.length})</NavLink></li>
            </ul>
        </nav>
        <div className="HeaderAccount">
            account
        </div>
        <div className="HeaderBurger" onClick={()=> setShowMenu(!showMenu)}>
        {
            showMenu? <BsMenuDown/>:<BsMenuUp/>
        }
        </div>
        {showMenu && <Menu/>}
    </div>
  )
}

export default Header