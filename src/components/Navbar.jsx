import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <header className="fixed z-10 w-full font-poppins leading-normal">
      <nav className="relative w-full flex-nowrap items-center justify-center py-4  text-white bg-slate-50/10 backdrop-blur-md">
        <ul className="flex justify-center items-center gap-10 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a 
                href={item.href}
                className=""  
              >
                // {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;