import { useContext } from "react";
import { NavLink } from "react-router-dom"
import CountContext from "../etc/CountContext";

const Navbar = () => {

    const { resetCount } = useContext(CountContext)
    return (
        <nav>
            <ul>
                <li><NavLink to="/" onClick={resetCount}>Project Gutenber</NavLink></li>
                <li><NavLink to="/favourite"><span><i className="icon-heart"></i></span>
                </NavLink></li>
            </ul>
        </nav >
    )
}


export default Navbar