const workExperience = [
  {
    role: 'Software Developer',
    company: 'Company Name · Full-time',
    period: '2022 – Present',
    bullets: [
      'Designed and implemented automated data management processes within a large agile (SCRUM) environment, reducing manual effort significantly.',
      'Built and optimized Power BI dashboards for real-time operational monitoring and decision-making support for senior leadership.',
      'Developed and maintained ETL pipelines using Apache Airflow, integrating Snowflake and Databricks for scalable, reliable data processing.',
      'Managed backlog grooming, sprint ceremonies, and cross-team stakeholder communications using JIRA and Confluence.',
    ],
  },
];

const skillGroups = [
  {
    label: 'Languages & Engineering',
    skills: ['Python', 'SQL', 'PySpark / Spark', 'ETL Jobs', 'Git'],
  },
  {
    label: 'Data Platforms',
    skills: ['Snowflake', 'Databricks', 'Apache Airflow'],
  },
  {
    label: 'BI & Analytics',
    skills: ['Power BI', 'Data Modeling', 'Process Improvement'],
  },
  {
    label: 'Project Management',
    skills: ['Agile / SCRUM', 'JIRA', 'Confluence', 'Backlog Grooming', 'Stakeholder Management'],
  },
];

const Experience = () => (
  <div className="page experience-page">
    <div className="section-header">
      <p className="section-label">Explore My</p>
      <h1 className="section-title">Experience</h1>
    </div>

    <div className="timeline">
      {workExperience.map((job, i) => (
        <div key={i} className="timeline-item">
          <div className="timeline-card">
            <div className="timeline-top">
              <div>
                <div className="timeline-role">{job.role}</div>
                <div className="timeline-company">{job.company}</div>
              </div>
              <span className="timeline-period">{job.period}</span>
            </div>
            <div className="timeline-desc">
              <ul>
                {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="section-header" style={{ marginTop: '3rem' }}>
      <p className="section-label">Technical</p>
      <h2 className="section-title skills-subtitle">Skills</h2>
    </div>
    <div className="skills-grid">
      {skillGroups.map(group => (
        <div key={group.label} className="skill-group">
          <h3>{group.label}</h3>
          <div className="skill-tags">
            {group.skills.map(s => <span key={s} className="tag">{s}</span>)}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Experience;
