import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const roles = ['Software', 'Data', 'AI', 'ML', 'Product', 'Analytical'];

const Home = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const id = setInterval(() => setRoleIdx(i => (i + 1) % roles.length), 1200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="page hero">
      <p className="hero-greeting">Hello, I'm</p>
      <h1 className="hero-name">Karthik Raja</h1>
      <p className="hero-role"><span>{roles[roleIdx]}</span> Engineer</p>
      <div className="hero-actions">
        <a
          href="/assets/Software_Resume.pdf"
          download="Karthik_Software_Resume.pdf"
          className="btn btn-primary"
        >
          Download Resume
        </a>
        <button className="btn btn-outline" onClick={() => navigate('/contact')}>
          Contact Me
        </button>
      </div>
      <div className="hero-socials">
        <img
          src="/assets/linkedin.png"
          alt="LinkedIn"
          onClick={() => window.open('https://linkedin.com/in/karthikrajasubramanian99/', '_blank')}
        />
        <img
          src="/assets/github.png"
          alt="GitHub"
          onClick={() => window.open('https://github.com/karthiks233/', '_blank')}
        />
        <img
          src="/assets/phone.png"
          alt="Call"
          onClick={() => { window.location.href = 'tel:+17819216685'; }}
        />
      </div>
    </div>
  );
};

export default Home;
