const hobbies = [
  {
    title: 'Athletics',
    desc: 'Won several state-level competitions in the 800m in Bangalore, India. Frequently goes out on runs and participates in fitness events.',
  },
  {
    title: 'Reading',
    desc: 'Spends time reading non-fiction on philosophy, history, and emerging technology — particularly at the intersection of hardware and software.',
  },
];

const values = [
  {
    title: 'Discipline',
    desc: 'Competing at state level embedded a strong conviction that discipline is the foundation of anything outstanding.',
  },
  {
    title: 'Compassion',
    desc: 'Brings about clear thinking, grounded goal-setting, and a genuine sense of gratitude toward the work and the people involved.',
  },
  {
    title: 'Perseverance',
    desc: 'Strongly believes that any meaningful goal is achievable through consistency and wild passion — not shortcuts.',
  },
];

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
        <p className="sub">Software &amp; Cloud Engineer</p>
        <p>
          Curiosity-driven, first-principles engineer with roots in both hardware and software.
          Started building programs and mini-projects on Arduino and Raspberry Pi since 2017 — that
          foundation in embedded systems shapes how I think about every layer of the stack today.
          Currently building full-stack cloud applications at Gold Star Foods on AWS with CDK, TypeScript,
          and React.
        </p>
        <div className="about-stats">
          <div className="stat-card">
            <div className="stat-num">6+</div>
            <div className="stat-label">Years Building</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">M.Sc.</div>
            <div className="stat-label">Masters Degree</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">6</div>
            <div className="stat-label">Projects Shipped</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">B.E.</div>
            <div className="stat-label">Bachelors Degree</div>
          </div>
        </div>
      </div>
    </div>

    {/* Professional Background */}
    <div className="about-section">
      <p className="section-label">Career Arc</p>
      <h2 className="section-title" style={{ fontSize: '1.75rem' }}>Professional Background</h2>
      <p className="about-section-body" style={{ marginTop: '1rem' }}>
        My engineering path started with hardware — 2 years as an electronics engineering intern designing
        PCB circuits and writing C/C++ firmware for sensor systems. That grounding led me to Tata Consultancy
        Services (TCS), where I spent 2 years as a network engineer monitoring remote router and IoT devices
        at scale, writing Bash automation, and building dashboards to surface device health in real time.
      </p>
      <p className="about-section-body" style={{ marginTop: '0.75rem' }}>
        From networking I moved into product and process: a 6-month internship at American Family Insurance
        managing their internal software lifecycle and automating design-to-development handoffs with Jira
        Automation. Now at Gold Star Foods I'm building full-stack cloud applications on AWS — provisioning
        infrastructure with CDK, building APIs in TypeScript, and shipping React interfaces used daily by
        operations teams.
      </p>
      <p className="about-section-body" style={{ marginTop: '0.75rem' }}>
        Outside of work I apply the same systems thinking to personal projects in DevOps (Terraform, Ansible,
        ECS), MLOps (MLflow, Airflow), and agentic AI — bridging the gap between infrastructure and intelligence.
      </p>
    </div>

    {/* Hobbies */}
    <div className="about-section">
      <p className="section-label">Outside the Terminal</p>
      <h2 className="section-title" style={{ fontSize: '1.75rem' }}>Hobbies</h2>
      <div className="about-cards-grid" style={{ marginTop: '1rem' }}>
        {hobbies.map(h => (
          <div key={h.title} className="about-mini-card">
            <h4>{h.title}</h4>
            <p>{h.desc}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Values */}
    <div className="about-section">
      <p className="section-label">What Drives Me</p>
      <h2 className="section-title" style={{ fontSize: '1.75rem' }}>Values</h2>
      <div className="about-cards-grid" style={{ marginTop: '1rem' }}>
        {values.map(v => (
          <div key={v.title} className="about-mini-card">
            <h4>{v.title}</h4>
            <p>{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default About;
