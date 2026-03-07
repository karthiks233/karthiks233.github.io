function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// document.getElementById('result').innerText = '{{ result }}';
document.addEventListener("DOMContentLoaded", function () {
  const words = [
    "Software",
    "Data",
    "Product",
    "Data",
    "Analytical",
    "AI",
    "ML",
    "Business Analytical",
  ];
  let index = 0;
  const toggleWordEl = document.getElementById("toggle-word");

  setInterval(() => {
    index = (index + 1) % words.length;
    toggleWordEl.textContent = words[index];
  }, 1000);
});

// Get the logo element
var logo = document.querySelector("#profile .title");

// Add a class to make the logo visible with a transition
// logo.classList.add('visible');
setTimeout(function () {
  logo.classList.add("visible");
}, 500);

/* PROJECT MODAL LOGIC */

const projectDetails = {
  "rag-chatbot": {
    title: "AI RAG-ChatBot",
    description: `
            <h3>Stack</h3>
            <p>Python, LangChain, OpenAI API, Streamlit</p>
            <h3>Infrastructure</h3>
            <p>AWS Lambda, API Gateway</p>
            <h3>Outcomes</h3>
            <ul>
                <li>Built an AI-powered chatbot using Northern Suites.</li>
                <li>Leverages RAG (Retrieval-Augmented Generation) for accurate responses.</li>
                <li>Improved query response time and handled concurrent users effectively.</li>
            </ul>
        `,
  },
  finsights: {
    title: "Finsights",
    description: `
            <h3>Stack</h3>
            <p>HTML, CSS, React, TS, Python</p>
            <h3>Infrastructure</h3>
            <p>AWS S3 vector store, AWS ECS, ECR</p>
            <h3>Outcomes</h3>
            <ul>
                <li>Built an end-to-end RAG platform over 15+ years of SEC 10-K filings enabling context-aware financial intelligence.</li>
                <li>Designed a hybrid retrieval architecture using S3-backed vector storage and structured KPI pipelines to minimize hallucinations.</li>
                <li>Deployed containerized FastAPI and Streamlit services on AWS ECS and Kubernetes with Application Load Balancers, autoscaling, and CI/CD.</li>
                <li>Achieved low-latency retrieval at <$0.02 per query with monitoring via CloudWatch.</li>
            </ul>
        `,
  },
  "pose-recognition": {
    title: "Pose Recognition using AI",
    description: `
            <h3>Stack</h3>
            <p>Python, TensorFlow/Keras, OpenCV</p>
            <h3>Infrastructure</h3>
            <p>Local inference / Edge deployment</p>
            <h3>Outcomes</h3>
            <ul>
                <li>Developed an AI model to recognize human poses in real-time.</li>
                <li>Utilizes computer vision techniques for accurate detection (30 FPS).</li>
                <li>Achieved high accuracy (98%) in pose classification.</li>
            </ul>
        `,
  },
};

function openModal(projectId) {
  const modal = document.getElementById("project-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-description");

  if (projectDetails[projectId]) {
    modalTitle.innerText = projectDetails[projectId].title;
    modalDesc.innerHTML = projectDetails[projectId].description;
    modal.style.display = "block";
  }
}

function closeModal() {
  const modal = document.getElementById("project-modal");
  modal.style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function (event) {
  const modal = document.getElementById("project-modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
