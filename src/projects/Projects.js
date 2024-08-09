import "./projects.css"
import { projectsData } from "./projectsData";

function Projects() {
    return (
        <>
            <div className="container-projects">
                <div className="cards-parent">
                    <div className="cards-display">
                        {
                            projectsData.map(projects => {
                                return (
                                    <div className="project-card">
                                        <div className="image-section">
                                            <img alt="Project" src={projects.image} width={"100%"}/>
                                        </div>
                                        <div className="card-body">
                                            <p className="card-title">{projects.title}</p>
                                            <p>{projects.description}</p>
                                        </div>
                                        <div className="buttons-section">
                                            <a href={projects.github} className="card-btn" rel="noopener noreferrer" target="_blank">Git repo</a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                    </div>

                </div>
            </div>
        </>
    )
}

export default Projects;