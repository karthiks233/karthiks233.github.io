const workExperience = [
  {
    role: 'Software Developer',
    company: 'Gold Star Foods · Full-time',
    period: 'Jan 2025 – Present',
    bullets: [
      'Building full-stack web applications on AWS using CDK (IaaC) with TypeScript and React.',
      'Designing and provisioning cloud infrastructure — Lambda, API Gateway, DynamoDB, S3 — entirely through AWS CDK constructs.',
      'Developing reusable React component libraries and TypeScript APIs for internal tooling and operational dashboards.',
    ],
  },
  {
    role: 'Process Improvement Intern',
    company: 'American Family Insurance · Internship',
    period: 'Jun 2024 – Dec 2024',
    bullets: [
      'Managed internal software product lifecycle using SDLC workflows across cross-functional engineering and design teams.',
      'Automated design-to-development handoffs using Jira Automation, reducing manual coordination overhead by ~40%.',
      'Facilitated sprint ceremonies and maintained Confluence documentation for product teams of 15+ stakeholders.',
    ],
  },
  {
    role: 'Network Engineer',
    company: 'Tata Consultancy Services (TCS) · Full-time',
    period: 'Jun 2021 – May 2023',
    bullets: [
      'Monitored remote router and IoT devices at scale using Bash scripts and cron-based alerting pipelines.',
      'Built real-time performance and status dashboards to surface device health metrics for operations teams.',
      'Automated log parsing and alert triage across distributed network infrastructure, reducing mean time to detect issues.',
      'Developed and maintained ETL pipelines integrating Snowflake and Databricks for network telemetry data processing.',
    ],
  },
  {
    role: 'Electronics Engineering Intern',
    company: 'Internship',
    period: 'Jun 2019 – May 2021',
    bullets: [
      'Developed embedded systems and automation projects using Arduino and Raspberry Pi microcontrollers.',
      'Designed PCB circuits and wrote firmware in C/C++ for sensor interfacing, actuator control, and data acquisition.',
    ],
  },
];

const skillGroups = [
  {
    label: 'Cloud & Infrastructure',
    skills: ['AWS CDK', 'AWS Lambda', 'API Gateway', 'DynamoDB', 'S3', 'ECS', 'ECR', 'Terraform', 'Ansible'],
  },
  {
    label: 'DevOps & MLOps',
    skills: ['Docker', 'GitHub Actions', 'MLflow', 'CI/CD Pipelines'],
  },
  {
    label: 'Languages & Frameworks',
    skills: ['TypeScript', 'Python', 'React', 'Node.js', 'Bash', 'SQL', 'PySpark'],
  },
  {
    label: 'Data Platforms',
    skills: ['Snowflake', 'Databricks', 'Apache Airflow', 'AWS Cost Explorer'],
  },
  {
    label: 'BI & Analytics',
    skills: ['Power BI', 'Data Modeling', 'ETL Design'],
  },
  {
    label: 'Project Management',
    skills: ['Agile / SCRUM', 'JIRA Automation', 'Confluence', 'Backlog Grooming', 'Stakeholder Management'],
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
