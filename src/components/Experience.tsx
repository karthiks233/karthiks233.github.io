const Experience = () => {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Skills</h2>
            <div className="article-container">
              <article>
                <img
                  src="/assets/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Backlog Grooming</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src="/assets/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Documentation</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src="/assets/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Agile</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src="/assets/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>SCRUM</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src="/assets/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Process Improvement</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src="/assets/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Power BI</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src="/assets/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>JIRA</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src="/assets/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Stakeholder Management</h3>
                  <p>Experienced</p>
                </div>
              </article>
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Skills</h2>
            <div className="article-container">
              <article>
                <img
                  src="/assets/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Confluence</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src="/assets/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>ETL Jobs</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src="/assets/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Airflow</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src="/assets/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Python</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src="/assets/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>SQL</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src="/assets/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Spark,PySpark</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src="/assets/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Git</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src="/assets/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Snowflake, Databricks</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => location.href='./#projects'}
      />
    </section>
  );
};

export default Experience;
