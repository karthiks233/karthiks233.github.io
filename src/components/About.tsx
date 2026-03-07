const About = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src="/assets/1.jpeg" // Assuming this is the profile pic
            alt="Profile picture"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src="/assets/experience.png"
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>2+ years <br />Software Developer</p>
            </div>
            <div className="details-container">
              <img
                src="/assets/education.png"
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>B.E. Bachelors Degree<br />M.Sc. Masters Degree</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              I am a skilled Software Developer with 2+ years of experience in a large agile environment, along with that I enjoy playing with data engineeering tools and techniques, and testing and deploying AI models on cloud server.
              I am skilled in designing and implementing automated data management processes, optimizing reporting and analysis, and developing user-friendly dashboards for effective monitoring and decision-making of border leadership.
            </p>
          </div>
        </div>
      </div>
      <img
        src="/assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => location.href='./#experience'}
      />
    </section>
  );
};

export default About;
