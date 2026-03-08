const About = () => (
  <div className="page about-page">
    <div className="section-header">
      <p className="section-label">Get To Know More</p>
      <h1 className="section-title">About Me</h1>
    </div>
    <div className="about-hero">
      <img src="/assets/1.jpeg" alt="Karthik Raja" className="about-photo" />
      <div className="about-bio">
        <h2>Karthik Raja</h2>
        <p className="sub">Software &amp; Data Engineer</p>
        <p>
          I'm a Software Developer with 2+ years of experience building data-driven solutions in
          agile environments. I enjoy working across the full data stack — from designing automated
          ETL pipelines and Snowflake/Databricks architectures to crafting Power BI dashboards that
          help leadership make confident decisions. I also have hands-on experience deploying and
          testing AI models on cloud infrastructure.
        </p>
        <div className="about-stats">
          <div className="stat-card">
            <div className="stat-num">2+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">M.Sc.</div>
            <div className="stat-label">Masters Degree</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">3</div>
            <div className="stat-label">Projects Shipped</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">B.E.</div>
            <div className="stat-label">Bachelors Degree</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
