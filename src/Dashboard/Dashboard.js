import React from 'react';
import { useHistory } from "react-router-dom";
import './Dashboard.css';

import PROJECT_LIST from './projectList';


function Dashboard() {
    const history_ = useHistory();
    const projects = PROJECT_LIST;

    const gotoProject = (routerLink) => history_.push(routerLink);

    return (
        <div className="dashboard">
            <h1 className="hero-text">⚛️ 100 days of react | <span><a href="https://twitter.com/rahucrux">Rahul Mourya</a></span></h1>
            <div className="card-row">
                {
                    projects.filter(project => project.showProject).map((project) =>
                        <div className="card" key={project.idx} onClick={(event) => gotoProject(project.routerLink)}>
                            {project.previewLink ? <img src={project.previewLink} className="card-img-top p-2" alt={project.name + ' preview'} /> : <span className="no-preview-available">No Preview Available</span>}
                            <div className="card-body">
                                <h5 className="card-title">{project.name || ''}</h5>
                                <p className="card-text">Takeaways: <mark>{project.takeaways.join(', ')}</mark></p>
                                {/* <button className="btn btn-primary" >View Project</button> */}
                                <div className="round-btn" onClick={(event) => gotoProject(project.routerLink)}><span className="material-icons">
                                    arrow_forward
                            </span></div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>

    );

}


export default Dashboard;