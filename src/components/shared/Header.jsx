import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/qualifications", label: "Qualifications" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
  { to: "/testimonials", label: "Testimonials" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `transition text-sm uppercase tracking-wider ${
      isActive
        ? "bg-primary text-white px-5 py-1 rounded-full ring-2 ring-primary shadow-lg"
        : "hover:text-primary"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block rounded-lg px-4 py-3 text-sm font-medium uppercase tracking-wider ${
      isActive
        ? "bg-primary text-white ring-2 ring-primary shadow-md"
        : "text-stone-700 hover:bg-stone-100"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/75 backdrop-blur-lg border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="text-center mb-4">
          <NavLink
            to="/"
            className="text-4xl font-semibold font-serif text-primary"
            onClick={() => setMenuOpen(false)}
          >
            White Lotus
          </NavLink>
        </div>
        <div className="hidden md:flex justify-center items-center space-x-6">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          className="md:hidden cursor-pointer absolute top-4 right-6 inline-flex items-center justify-center rounded-lg p-2 text-stone-700 hover:bg-white/70 hover:text-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-6 flex flex-col gap-2 bg-white/90">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={mobileLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Header;
