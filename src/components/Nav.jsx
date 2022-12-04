import { NavLink } from 'react-router-dom'
import './Nav.css'

const Nav = () => (

        <>
        <header className="relative">
            <nav className="p-8 fixed w-full text-right text-red-700">
                <NavLink className="ml-8" to="/">Home</NavLink>
                <NavLink className="ml-8" to="/about">About</NavLink>
                <NavLink className="ml-8" to="/gallery">Gallery</NavLink>
            </nav>
        </header>
        </>
    )

export default Nav