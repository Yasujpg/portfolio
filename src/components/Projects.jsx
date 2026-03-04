import Kanban from "../assets/kanban.png"

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">

        <h2 className="projects-title">Selected Projects</h2>

        <div className="featured-project">         
          <div className="featured-content">
            
            <h3>KANBAN BOARD</h3>

            <p className="project-role">
              Interactive Task Management Board — Personal Frontend Project
            </p>

            <p>
              A dynamic Kanban board designed to simulate Agile workflows.
              Users can create tasks and organize them across different stages
              using drag & drop interactions, providing a clean and intuitive
              task management experience.
            </p>

            <p>
              The project focuses on component structure, state management,
              and interactive UI behavior, recreating the core functionality
              of modern productivity tools like Trello or Jira.
            </p>

            <p className="tech-stack">
              React · JavaScript · HTML · CSS · Drag & Drop
            </p>

            <div className="project-buttons">

              <a
                href="https://github.com/yasujpg/kanban-board"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-github"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.99992 1.33331C7.12444 1.33331 6.25753 1.50575 5.4487 1.84078C4.63986 2.17581 3.90493 2.66688 3.28587 3.28593C2.03563 4.53618 1.33325 6.23187 1.33325 7.99998C1.33325 10.9466 3.24659 13.4466 5.89325 14.3333C6.22659 14.3866 6.33325 14.18 6.33325 14C6.33325 13.8466 6.33325 13.4266 6.33325 12.8733C4.48659 13.2733 4.09325 11.98 4.09325 11.98C3.78659 11.2066 3.35325 11 3.35325 11C2.74659 10.5866 3.39992 10.6 3.39992 10.6C4.06659 10.6466 4.41992 11.2866 4.41992 11.2866C4.99992 12.3 5.97992 12 6.35992 11.84C6.41992 11.4066 6.59325 11.1133 6.77992 10.9466C5.29992 10.78 3.74659 10.2066 3.74659 7.66665C3.74659 6.92665 3.99992 6.33331 4.43325 5.85998C4.36659 5.69331 4.13325 4.99998 4.49992 4.09998C4.49992 4.09998 5.05992 3.91998 6.33325 4.77998C6.85992 4.63331 7.43325 4.55998 7.99992 4.55998C8.56659 4.55998 9.13992 4.63331 9.66659 4.77998C10.9399 3.91998 11.4999 4.09998 11.4999 4.09998C11.8666 4.99998 11.6333 5.69331 11.5666 5.85998C11.9999 6.33331 12.2533 6.92665 12.2533 7.66665C12.2533 10.2133 10.6933 10.7733 9.20659 10.94C9.44659 11.1466 9.66659 11.5533 9.66659 12.1733C9.66659 13.0666 9.66659 13.7866 9.66659 14"
                    fill="currentColor"
                  />
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href="https://yasujpg.github.io/kanban-board/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-live"
              >
                <span className="globe">🌐</span>
                <span>Live Site</span>
              </a>

            </div>

          </div>

          <div className="featured-image">
            <img src={Kanban} alt="Kanban Board Project Screenshot" />
          </div>

        </div>

        <div className="projects-grid">
          <div className="project-card">
            <h3>Responsive Landing Page</h3>
            <p>
              Modern responsive landing page focused on layout systems,
              spacing and strong visual hierarchy.
            </p>
          </div>

          <div className="project-card">
            <h3>UI Components Collection</h3>
            <p>
              Reusable React components with consistent styling and
              smooth interaction effects.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects