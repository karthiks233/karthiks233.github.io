const projects = [
  {
    title: 'AI RAG-ChatBot',
    img: '/assets/chatbot.jpeg',
    description:
      'An AI-powered chatbot for Northern Suites that uses Retrieval-Augmented Generation to deliver accurate, context-aware responses from a custom property knowledge base — deployed serverlessly on AWS.',
    tags: ['Python', 'LangChain', 'OpenAI API', 'Streamlit', 'AWS Lambda'],
    github: 'https://github.com/karthiks233/NS',
    demo: 'https://northern-suites.com/',
    demoLabel: 'Live Demo',
  },
  {
    title: 'Finsights',
    img: '/assets/DE.png',
    description:
      'An end-to-end RAG platform over 15+ years of SEC 10-K filings for context-aware financial intelligence. Hybrid retrieval keeps hallucinations low, hitting sub-$0.02 per query at scale on AWS ECS.',
    tags: ['React', 'TypeScript', 'Python', 'FastAPI', 'AWS ECS', 'Kubernetes'],
    github: 'https://github.com/karthiks233/H1B',
    demo: 'https://github.com/karthiks233/H1B',
    demoLabel: 'View Repo',
  },
  {
    title: 'PoseFit — Pose Recognition',
    img: '/assets/yoha.jpeg',
    description:
      'Real-time AI pose classification using computer vision — 98% accuracy at 30 FPS. Built with TensorFlow and OpenCV; try it live in your browser with your webcam.',
    tags: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
    github: 'https://github.com/karthiks233/PoseFit',
    demo: 'https://posefit.net',
    demoLabel: 'Try it Live',
  },
];

const Projects = () => (
  <div className="page projects-page">
    <div className="section-header">
      <p className="section-label">Browse My Recent</p>
      <h1 className="section-title">Projects</h1>
    </div>
    <div className="projects-grid">
      {projects.map(p => (
        <div key={p.title} className="project-card">
          <img src={p.img} alt={p.title} className="project-card-img" />
          <div className="project-card-body">
            <h2 className="project-card-title">{p.title}</h2>
            <p className="project-card-desc">{p.description}</p>
            <div className="project-card-tags">
              {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <div className="project-card-actions">
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                GitHub
              </a>
              <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                {p.demoLabel}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
