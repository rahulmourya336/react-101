import React from "react";
import { useHistory } from "react-router-dom";
import "./Dashboard.css";
import GithubIcon from "../assets/github-icon.svg";

import PROJECT_LIST from "./projectList";

function Dashboard() {
  const history_ = useHistory();
  const projects = PROJECT_LIST.filter((project) => project.showProject);

  const gotoProject = (routerLink) => {
    if (routerLink.startsWith("http")) {
      window.location.assign(routerLink);
    } else {
      history_.push(routerLink);
    }
  };

  return (
    <div className="dashboard">
      <div className="bg-glow bg-glow--one" aria-hidden="true"></div>
      <div className="bg-glow bg-glow--two" aria-hidden="true"></div>

      <header className="dash-nav">
        <span className="dash-brand">⚛️ 100 Days of React</span>
        <a
          className="dash-nav-link"
          href="https://twitter.com/rahucrux"
          target="_blank"
          rel="noreferrer"
        >
          @rahucrux
        </a>
      </header>

      <section className="hero">
        <p className="hero-eyebrow">Learning by building</p>
        <h1 className="hero-title">
          Rahul Mourya <span className="hero-wave">👋</span>
        </h1>
        <p className="hero-subtitle">
          A hands-on journal of React: {projects.length} small projects
          built to learn hooks, forms, APIs and everything in between.
        </p>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-number">{projects.length}</span>
            <span className="hero-stat-label">Projects shipped</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number">100</span>
            <span className="hero-stat-label">Days challenge</span>
          </div>
        </div>
      </section>

      <section className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.idx}>
            <div
              className="project-media"
              onClick={() => gotoProject(project.routerLink)}
            >
              {project.previewLink ? (
                <img
                  src={project.previewLink}
                  alt={project.name + " preview"}
                  loading="lazy"
                />
              ) : (
                <span className="project-media-empty">
                  No Preview Available
                </span>
              )}
              <div className="project-media-overlay">
                <span className="material-icons">north_east</span>
              </div>
            </div>

            <div className="project-body">
              <h2
                className="project-title"
                onClick={() => gotoProject(project.routerLink)}
              >
                {project.name || ""}
              </h2>

              <div className="project-tags">
                {project.takeaways.map((takeaway, _idx) => (
                  <span className="project-tag" key={_idx}>
                    {takeaway}
                  </span>
                ))}
              </div>

              <div className="project-footer">
                {project.projectURL ? (
                  <a
                    href={project.projectURL}
                    className="project-github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={GithubIcon} alt="" height={16} width={16} />
                    Source
                  </a>
                ) : (
                  <span className="project-github project-github--muted">
                    <img src={GithubIcon} alt="" height={16} width={16} />
                    Local demo
                  </span>
                )}

                <button
                  type="button"
                  className="project-open"
                  onClick={() => gotoProject(project.routerLink)}
                  aria-label={`Open ${project.name}`}
                >
                  <span className="material-icons">arrow_forward</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

      <footer className="dash-footer">
        Built with React, one day at a time.
      </footer>
    </div>
  );
}

export default Dashboard;
