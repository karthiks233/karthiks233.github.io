import { NavLink } from 'react-router-dom';

const Footer = () => (
  <footer>
    <nav>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/experience">Experience</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
    <p>Copyright &copy; 2025 Karthik Raja. All Rights Reserved.</p>
  </footer>
);

export default Footer;
