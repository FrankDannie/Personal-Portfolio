import "./styles/main.scss";
import profile from "./assets/profile.jpeg";

export default function App() {

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container">

      {/* HERO */}
      <section className="hero">
      <div className="hero">
            <img src={profile} alt="Frank Dannie" />
          </div>
        <div className="hero-content">

          {/* LEFT */}
          <div className="hero-left">
            <h1 className="title">
              Frank Dannie <br />
              <span>AI Engineer & GenAI Architect</span>
            </h1>

            <p className="about">
              Forward Deployed AI Engineer at SoftBank × OpenAI JV, specializing in
              production-grade Generative AI systems, RAG architectures, and multi-agent workflows.
            </p>

            <div className="buttons">
              <button className="primary" onClick={() => scrollTo("projects")}>
                View Work
              </button>

              <button className="secondary" onClick={() => scrollTo("contact")}>
                Contact
              </button>

              <button onClick={() => window.open("https://github.com/FrankDannie")}>
                GitHub
              </button>

              <button onClick={() => window.open("https://www.linkedin.com/in/frank-e-m-dannie-7878a0163/")}>
                LinkedIn
              </button>
            </div>
          </div>



        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <h2>About Me</h2>
        <p>
          I am a Forward Deployed AI Engineer with 5+ years of experience building
          production-grade AI systems. I specialize in designing scalable GenAI solutions,
          including RAG architectures and multi-agent workflows, and delivering them in
          real-world enterprise environments.
        </p>
        <p>
          I work closely with stakeholders to translate business problems into deployable
          AI systems, bridging the gap between cutting-edge research and practical impact.
        </p>
      </section>

      {/* SKILLS */}
      <section>
        <h2>Tech Stack</h2>
        <div className="grid">
          {[
            "Python",
            "FastAPI",
            "SQL",
            "LangChain / LangGraph",
            "RAG Systems",
            "LLMs & GenAI",
            "Azure Cloud",
            "Docker",
          ].map((s) => (
            <div className="card" key={s}>{s}</div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <h2>Experience</h2>

        <div className="card">
          <h3>SoftBank × OpenAI JV</h3>
          <p><strong>Forward Deployed AI Engineer</strong> | Aug 2025 – Present</p>
          <ul>
            <li>Led design and deployment of enterprise GenAI solutions</li>
            <li>Built RAG pipelines and multi-agent systems for clients</li>
            <li>Collaborated directly with customers to define AI strategy</li>
            <li>Delivered PoCs, demos, and production-grade deployments</li>
          </ul>
        </div>

        <div className="card">
          <h3>VeBuIn Japan</h3>
          <p><strong>System Engineer</strong> | Apr 2022 – Jul 2025</p>
          <ul>
            <li>Developed and deployed full-stack enterprise applications</li>
            <li>Translated business requirements into scalable systems</li>
            <li>Managed end-to-end delivery and post-production support</li>
          </ul>
        </div>
      </section>

      {/* INTERNSHIPS */}
      <section>
        <h2>Internships</h2>

        <div className="card">
          <h3>Tequed Labs — Full Stack Developer Intern</h3>
          <p>Jan 2022 – Mar 2022 | Bengaluru</p>
          <ul>
            <li>Built a full-stack tourism web application from design to deployment</li>
            <li>Delivered a responsive, production-ready system with optimizations</li>
          </ul>
        </div>

        <div className="card">
          <h3>SS&C Blue Prism — RPA Developer Intern</h3>
          <p>Jun 2021 – Oct 2021 | Bengaluru</p>
          <ul>
            <li>Developed RPA workflows for invoice processing automation</li>
            <li>Improved operational efficiency through automation</li>
          </ul>
        </div>

        <div className="card">
          <h3>XIMB — Machine Learning Intern</h3>
          <p>Nov 2020 – May 2021 | Bhubaneswar</p>
          <ul>
            <li>Built sentiment analysis system for large-scale Amazon review data</li>
            <li>Delivered actionable insights for marketing stakeholders</li>
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <h2>Selected Work</h2>

        <div className="projects">
          <div className="project-card">
            <h3>RAG Architecture Platform</h3>
            <p>
              Built scalable retrieval systems using embeddings and vector databases,
              enabling enterprise knowledge search with LLMs.
            </p>
          </div>

          <div className="project-card">
            <h3>Multi-Agent AI System</h3>
            <p>
              Designed autonomous agent workflows using LangGraph orchestration.
            </p>
          </div>

          <div className="project-card">
            <h3>GenAI Backend Platform</h3>
            <p>
              Developed production-grade APIs integrating OpenAI services using FastAPI.
            </p>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section>
        <h2>Education</h2>

        <div className="card">
          <h3>MBA – Project Management</h3>
          <p>JAIN University (2025 – 2027)</p>
        </div>

        <div className="card">
          <h3>B.E. Computer Science</h3>
          <p>DSATM, Bangalore (2018 – 2022)</p>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section>
        <h2>Certifications</h2>
        <div className="grid">
          {[
            "JLPT N2",
            "Google Cloud Generative AI Leader",
            "Solutions Architect Associate",
            "Workato Agentic AI",
            "Blue Prism RPA Foundation",
          ].map((c) => (
            <div className="card" key={c}>{c}</div>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section>
        <h2>Key Achievements</h2>
        <ul>
          <li>Bridged business needs with scalable AI solutions in production</li>
          <li>Led architecture design, code reviews, and technical mentorship</li>
          <li>Worked in high-impact enterprise AI environments</li>
          <li>Active contributor to open-source AI/ML projects</li>
        </ul>
      </section>

      {/* VOLUNTEERING */}
      <section>
        <h2>Volunteering</h2>

        <div className="card">
          <h3>Sunday School Teacher</h3>
          <p>Resurrection Church (2018 – 2019)</p>
        </div>

        <div className="card">
          <h3>Campus Ambassador</h3>
          <p>Hackathon.com (2019)</p>
        </div>
      </section>

      {/* LANGUAGES */}
      <section>
        <h2>Languages</h2>
        <div className="grid">
          <div className="card">English — Native</div>
          <div className="card">Japanese — Business (JLPT N2)</div>
          <div className="card">Tamil — Native</div>
          <div className="card">Hindi — Intermediate</div>
          <div className="card">German — Beginner</div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <h2>Contact</h2>
        <p>Email: frank.dannie@gmail.com</p>

        <p>
          GitHub:{" "}
          <a href="https://github.com/FrankDannie" target="_blank">
            github.com/FrankDannie
          </a>
        </p>

        <p>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/frank-e-m-dannie-7878a0163/" target="_blank">
          frank-e-m-dannie-7878a0163/
          </a>
        </p>
      </section>

    </div>
  );
}