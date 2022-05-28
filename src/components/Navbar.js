import { NavLink } from "react-router-dom"

const Navbar = () => {

    return (
        <nav>
            <ul>
                <li><NavLink to="/gutenberg-project">Project Gutenber</NavLink></li>
                <li><NavLink to="/gutenberg-project/favourite"><span><i className="icon-heart"></i></span>
                </NavLink></li>
            </ul>
        </nav >
    )
}


export default Navbar