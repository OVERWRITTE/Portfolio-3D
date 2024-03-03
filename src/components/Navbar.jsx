import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <header className='header'>
            <NavLink to="/" className="w-30 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md p-4">
                <p className="blue-gradient_text">MACC</p>
            </NavLink>
            <nav className="flex text-lg gap-7 font-medium" >
                <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-500 font-bold drop-shadow-lg" : " text-white font-bold drop-shadow-lg"}>
                    Contacto
                </NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive ? "text-blue-500 font-bold drop-shadow-lg" : "text-white font-bold drop-shadow-lg"}>
                    Projectos
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar