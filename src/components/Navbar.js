import { NavLink } from "react-router-dom"

const Navbar = () => {

    return (
        <nav>
            <ul>
                <li><NavLink to="/">Project Gutenber</NavLink></li>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/favourite">fav</NavLink></li>
            </ul>
        </nav>
    )
}


export default Navbar