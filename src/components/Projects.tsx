import { useState } from 'react';

interface ProjectDetails {
    title: string;
    img: string;
    github: string;
    demo: string;
    demoLabel: string;
    details: {
        stack: string;
        infrastructure: string;
        outcomes: string[];
    };
}

const projects: Record<string, ProjectDetails> = {
    "rag-chatbot": {
        title: "AI RAG-ChatBot",
        img: "/assets/chatbot.jpeg",
        github: "https://github.com/karthiks233/NS",
        demo: "https://northern-suites.com/",
        demoLabel: "Live Demo",
        details: {
            stack: "Python, LangChain, OpenAI API, Streamlit",
            infrastructure: "AWS Lambda, API Gateway",
            outcomes: [
                "Built an AI-powered chatbot using Northern Suites.",
                "Leverages RAG (Retrieval-Augmented Generation) for accurate responses.",
                "Improved query response time and handled concurrent users effectively."
            ]
        }
    },
    "finsights": {
        title: "Finsights",
        img: "/assets/DE.png",
        github: "https://github.com/karthiks233/H1B",
        demo: "https://github.com/karthiks233/H1B",
        demoLabel: "Live Demo",
        details: {
            stack: "HTML, CSS, React, TS, Python",
            infrastructure: "AWS S3 vector store, AWS ECS, ECR",
            outcomes: [
                "Built an end-to-end RAG platform over 15+ years of SEC 10-K filings enabling context-aware financial intelligence.",
                "Designed a hybrid retrieval architecture using S3-backed vector storage and structured KPI pipelines to minimize hallucinations.",
                "Deployed containerized FastAPI and Streamlit services on AWS ECS and Kubernetes with Application Load Balancers, autoscaling, and CI/CD.",
                "Achieved low-latency retrieval at <$0.02 per query with monitoring via CloudWatch."
            ]
        }
    },
    "pose-recognition": {
        title: "Pose Recognition using AI",
        img: "/assets/yoha.jpeg",
        github: "https://github.com/karthiks233/PoseFit",
        demo: "https://posefit.net",
        demoLabel: "Live Demo - Try this!!",
        details: {
            stack: "Python, TensorFlow/Keras, OpenCV",
            infrastructure: "Local inference / Edge deployment",
            outcomes: [
                "Developed an AI model to recognize human poses in real-time.",
                "Utilizes computer vision techniques for accurate detection (30 FPS).",
                "Achieved high accuracy (98%) in pose classification."
            ]
        }
    }
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<string | null>(null);

    const openModal = (id: string) => {
        setSelectedProject(id);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    // Close modal when clicking outside
    const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if ((e.target as HTMLElement).classList.contains('modal')) {
            closeModal();
        }
    };

    const currentProject = selectedProject ? projects[selectedProject] : null;

    return (
        <>
            <section id="projects">
                <p className="section__text__p1">Browse My Recent</p>
                <h1 className="title">Projects</h1>
                <div className="experience-details-container">
                    <div className="about-containers">
                        {Object.entries(projects).map(([id, project]) => (
                            <div key={id} className="details-container color-container">
                                <div className="article-container">
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        className="project-img"
                                        onClick={() => openModal(id)}
                                        style={{ cursor: 'pointer' }}
                                    />
                                </div>
                                <h2 
                                    className="experience-sub-title project-title" 
                                    onClick={() => openModal(id)} 
                                    style={{ cursor: 'pointer' }}
                                >
                                    {project.title}
                                </h2>
                                <div className="btn-container">
                                    <button
                                        className="btn btn-color-2 project-btn"
                                        onClick={() => location.href = project.github}
                                    >
                                        Github
                                    </button>
                                    <button
                                        className="btn btn-color-2 project-btn"
                                        onClick={() => location.href = project.demo}
                                    >
                                        {project.demoLabel}
                                    </button>
                                    <button
                                        className="btn btn-color-2 project-btn"
                                        onClick={() => openModal(id)}
                                    >
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <img
                    src="/assets/arrow.png"
                    alt="Arrow icon"
                    className="icon arrow"
                    onClick={() => location.href = './#contact'}
                />
            </section>

            {/* Modal */}
            {selectedProject && currentProject && (
                <div id="project-modal" className="modal" style={{ display: 'block' }} onClick={handleOutsideClick}>
                    <div className="modal-content">
                        <span className="close-btn" onClick={closeModal}>&times;</span>
                        <h2 id="modal-title" className="modal-title">{currentProject.title}</h2>
                        <div id="modal-description" className="modal-description">
                            <h3>Stack</h3>
                            <p>{currentProject.details.stack}</p>
                            <h3>Infrastructure</h3>
                            <p>{currentProject.details.infrastructure}</p>
                            <h3>Outcomes</h3>
                            <ul>
                                {currentProject.details.outcomes.map((outcome, index) => (
                                    <li key={index}>{outcome}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Projects;
