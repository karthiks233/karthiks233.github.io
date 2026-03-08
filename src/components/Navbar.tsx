import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <NavLink to="/" className="nav-logo" onClick={close}>
        Karthik Raja
      </NavLink>

      <nav className="nav-links-desktop">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <button
        className="hamburger"
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {open && (
        <nav className="nav-links-mobile">
          <NavLink to="/about" onClick={close}>About</NavLink>
          <NavLink to="/experience" onClick={close}>Experience</NavLink>
          <NavLink to="/projects" onClick={close}>Projects</NavLink>
          <NavLink to="/contact" onClick={close}>Contact</NavLink>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
