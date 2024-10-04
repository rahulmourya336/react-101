import React from "react";
import { useHistory } from "react-router-dom";
import "./Dashboard.css";
import GithubIcon from "../assets/github-icon.svg";

import PROJECT_LIST from "./projectList";

function Dashboard() {
  const history_ = useHistory();
  const projects = PROJECT_LIST;

  const gotoProject = (routerLink) => {
    if (routerLink.startsWith("http")) {
      window.location.assign(routerLink);
    } else {
      history_.push(routerLink);
    }
  };

  return (
    <div className="dashboard">
      <h1 className="hero-text">
        ⚛️ 100 days of react |{" "}
        <span>
          <a href="https://twitter.com/rahucrux">Rahul Mourya</a>
        </span>
      </h1>
      <div className="card-row mt-10">
        {projects
          .filter((project) => project.showProject)
          .map((project) => (
            <div className="card" key={project.idx}>
              {project.previewLink ? (
                <img
                  src={project.previewLink}
                  className="card-img-top p-2"
                  alt={project.name + " preview"}
                  onClick={(event) => gotoProject(project.routerLink)}
                />
              ) : (
                <span
                  className="no-preview-available"
                  onClick={(event) => gotoProject(project.routerLink)}
                >
                  No Preview Available
                </span>
              )}
              <div className="card-body">
                <h5
                  className="card-title"
                  onClick={(event) => gotoProject(project.routerLink)}
                >
                  {project.name || ""}
                </h5>
                <p className="card-text">
                  <span className="text-sm"> Takeaways: </span>
                  {project.takeaways.map((takeaway, _idx) => (
                    <mark key={_idx}>{takeaway}</mark>
                  ))}
                </p>
                {/* <button className="btn btn-primary" >View Project</button> */}
                {project.projectURL && (
                  <p className="project-link">
                    <a
                      href={project.projectURL}
                      className="text-link"
                      target="_blank"
                    >
                      <img
                        src={GithubIcon}
                        alt="Github icon"
                        height={20}
                        width={20}
                        className="mr-2"
                      />
                      Github
                    </a>
                  </p>
                )}
                <div
                  className="round-btn"
                  onClick={(event) => gotoProject(project.routerLink)}
                >
                  <span className="material-icons">arrow_forward</span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Dashboard;
