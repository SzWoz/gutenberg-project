import { NavLink } from "react-router-dom"

const Navbar = () => {

    return (
        <nav>
            <ul>
                <li><NavLink to="/">Project Gutenber</NavLink></li>
                <li><NavLink to="/favourite"><span><i className="icon-heart"></i></span>
                </NavLink></li>
            </ul>
        </nav >
    )
}


export default Navbar