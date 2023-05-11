import "../styles/projects.scss";
import { projectData } from "../data";

const Projects = () => {
  return (
    <section id="projects-container">
      <h2>Projects</h2>
      <ul className="projects">
        {projectData?.map((p, i) => (
          <li key={i} className="project-wrapper">
            <h3>{p.title}</h3>
            <div className="project-img">
              <img src={p.image} alt={`website template showing ${p.title}`} />
            </div>
            <div className="project-body">
              <p>{p.description}</p>
              
              <p>{p.comments}</p>
              {p.link && (
                <button
                  className="nostyle_btn"
                  onClick={() =>
                    window.open(p.link, "_blank", "noopener,noreferrer")
                  }
                >
                  Takeaway wireframe
                </button>
              )}
              <button
                onClick={() =>
                  window.open(p.website, "_blank", "noopener,noreferrer")
                }
              >
                Website
              </button>
              <button
                onClick={() =>
                  window.open(p.code, "_blank", "noopener,noreferrer")
                }
              >
                Source code
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
