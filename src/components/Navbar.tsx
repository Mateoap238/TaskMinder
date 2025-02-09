import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom"
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation()
    const pathname = location.pathname

    const navItems = [
        { href: "/university", label: "Universidad" },
        { href: "/work", label: "Trabajo" },
        { href: "/personal", label: "Personal" },
    ]

    return (
        <nav className="bg-gray-800 p-4 text-white rounded-2xl shadow-2xl">
            <div className=" mx-3 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brain"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8" /><path d="M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8" /><path d="M17.5 16a3.5 3.5 0 0 0 0 -7h-.5" /><path d="M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0" /><path d="M6.5 16a3.5 3.5 0 0 1 0 -7h.5" /><path d="M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10" /></svg>

                    <Link to="/" className="text-xl font-bold">
                        TaskMinder
                    </Link>
                </div>
                <div className="hidden md:flex gap-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            to={item.href}
                            className={`hover:text-gray-300 transition-colors ${pathname === item.href ? "text-blue-400" : ""}`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>}
                </button>
            </div>
            <div className={`md:hidden flex flex-col gap-4  transition-all duration-300 ${isMenuOpen ? "max-h-screen mt-2 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        to={item.href}
                        className={`hover:text-gray-300 transition-colors  ${pathname === item.href ? "text-blue-400" : ""}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </nav>
    )
}

