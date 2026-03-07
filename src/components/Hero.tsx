import { useEffect, useState } from 'react';

const Hero = () => {
  const [word, setWord] = useState('Software');
  const [isLogoVisible, setIsLogoVisible] = useState(false);

  useEffect(() => {
    const words = ["Software", "Data", "Product", "Data", "Analytical", "AI", "ML", "Business Analytical"];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % words.length;
      setWord(words[index]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLogoVisible(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="profile">
      {/* 
      <div className="section__pic-container">
        <img src="/assets/1.jpeg" alt="John Doe profile picture" />
      </div> 
      */}
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        
        <h1 className={`title ${isLogoVisible ? 'visible' : ''}`}>Karthik Raja</h1>
        <p className="section__text__p2">
          <span id="toggle-word">{word}</span> Engineer
        </p>
        <div className="btn-container">
          <a 
              href="/assets/Software_Resume.pdf" 
              download="Karthik_Software_Resume.pdf"
              className="btn btn-color-1" 
              role="button">
          
              Download Resume
          </a>
          <button className="btn btn-color-1" onClick={() => location.href='./#contact'}>
              Contact Info
          </button>
      </div>
        <div id="socials-container">
          <img
            src="/assets/linkedin.png"
            alt="My LinkedIn profile"
            className="icon"
            onClick={() => location.href='https://linkedin.com/in/karthikrajasubramanian99/'}
          />
          <img
            src="/assets/github.png"
            alt="My Github profile"
            className="icon"
            onClick={() => location.href='https://github.com/karthiks233/'}
          />
          <img
            src="/assets/phone.png"
            alt="Call me"
            className="icon"
            onClick={() => location.href='tel:+17819216685'}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
