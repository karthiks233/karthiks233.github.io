const workExperience = [
  {
    role: 'Software Engineer',
    company: 'Gold Star Foods · Full-time · LA, CA',
    period: 'Jan 2026 – Present',
    bullets: [
      'Shipped 5+ full-stack features end-to-end powering procurement and demand-forecasting workflows on an agentic food-distribution platform, built across TypeScript, React, Express, Prisma, and AWS CDK.',
      "Cut Text-to-SQL chatbot query-generation latency by 40% using AWS Bedrock's Converse API with tool-use calls and knowledge-graph prompt injection, enforcing guardrails at the prompt and query-validation layers.",
      'Automated the dev deployment path from 30-minute to 5-minute zero-touch deploys with a GitHub Actions CI/CD pipeline — build, lint, and type-check gates plus gated manual approval for production.',
      'Authored production runbooks for 5+ microservices across Docker, PostgreSQL, and AWS ECS, standardizing incident response and cutting new-developer onboarding time by ~30%.',
      'Wired CloudWatch and Sentry metrics, structured logs, and alarms across services — 10 dashboards & alarms driving 60% faster incident detection.',
    ],
  },
  {
    role: 'Cloud Engineer Intern',
    company: 'Homesite (American Family Insurance) · Internship · Boston, MA',
    period: 'May 2024 – Dec 2024',
    bullets: [
      'Maintained 99.9% uptime for real-time analytics and batch-processing pipelines by defining technical deployment requirements for cloud workloads.',
      'Strengthened security posture with least-privilege IAM policies and orchestrated cloud resource allocation for engineering squads.',
      'Drove self-service tooling adoption and a 20% delivery-efficiency gain by leading CI/CD and Infrastructure-as-Code demos across squads.',
      'Partnered with SRE teams in JIRA-driven Agile ceremonies, aligning product backlogs with platform scalability goals for a 75% sprint-predictability gain.',
      'Reduced cloud spend ~20% by right-sizing compute and storage and flagging idle resources in recurring cost reviews.',
    ],
  },
  {
    role: 'Systems Engineer',
    company: 'Tata Consultancy Services (TCS) · Full-time · Bangalore, India',
    period: 'Aug 2021 – Aug 2023',
    bullets: [
      'Administered production Linux (Amazon Linux, RHEL) environments, sustaining 99.9% uptime across 500+ virtualized telecom nodes.',
      'Eliminated ~30% of operational toil with Python and Shell self-service tooling for log ingestion, system patching, and routine maintenance.',
      'Cut infrastructure-incident MTTR by 70% by engineering log-parsing agents that auto-detected faults across distributed networking devices.',
      'Improved successful production-deployment rate by 15% by optimizing the Agile release pipeline with JIRA automation and Git version control.',
      'Reduced on-call escalations 30% by authoring standardized runbooks and troubleshooting guides.',
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
    label: 'Cloud',
    skills: ['AWS EKS', 'EC2', 'S3', 'IAM', 'VPC', 'CloudWatch', 'Google Cloud (GKE)'],
  },
  {
    label: 'CI/CD & GitOps',
    skills: ['GitHub Actions', 'Jenkins', 'ArgoCD', 'Helm', 'GitOps'],
  },
  {
    label: 'IaC & Config',
    skills: ['Terraform', 'Ansible'],
  },
  {
    label: 'Containers & Orchestration',
    skills: ['Docker', 'Kubernetes (EKS)', 'Helm'],
  },
  {
    label: 'Security & Secrets',
    skills: ['IAM (least-privilege)', 'HashiCorp Vault', 'Gitleaks', 'Semgrep', 'OIDC / SAML'],
  },
  {
    label: 'Observability',
    skills: ['Prometheus', 'Grafana', 'Sentry', 'CloudWatch'],
  },
  {
    label: 'Languages',
    skills: ['Python', 'Bash', 'PowerShell', 'Java', 'C', 'SQL'],
  },
  {
    label: 'Databases & OS',
    skills: ['MySQL', 'PostgreSQL', 'Linux (Amazon Linux, Ubuntu, RHEL)', 'Windows Server'],
  },
  {
    label: 'Networking',
    skills: ['TCP/IP', 'DNS', 'DHCP', 'VPC', 'Load Balancers', 'NAT'],
  },
  {
    label: 'Certifications',
    skills: ['AWS Certified Solutions Architect – Associate'],
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
