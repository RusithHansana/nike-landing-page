import { hamburger } from "../assets/icons"
import { headerLogo } from "../assets/images"
import { navLinks } from "../constants"

const Nav = () => {
    return (
        <header className="padding-x py-8 absolute w-full z-50">
            <nav className="flex justify-between items-center">
                <a href="/">
                    <img
                        src={headerLogo}
                        alt="logo"
                        width={129}
                        height={29}
                    />
                </a>
                <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
                    {
                        navLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="leading-normal text-lg text-slate-500"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <div className="flex gap-2 text-lg leading-normal font-medium max-lg:hidden">
                    <a href="/">Sign In</a>
                    <span>/</span>
                    <a href="/">Explore now</a>
                </div>
                <div className="hidden max-lg:block">
                    <img
                        src={hamburger}
                        alt="mobile menu icon"
                        width={24}
                        height={24}
                    />
                </div>
            </nav>
        </header>
    )
}

export default Nav