import "./projects.css"

function Projects() {
    return (
        <>
            <div className="container-projects">
                <div className="cards-parent">
                    <div className="cards-display">
                        <div className="project-card">
                            <div className="image-section">
                                <img alt="Project" src="./img-projects/pokemonapp.png" width={"100%"}/>
                            </div>
                            <div className="card-body">
                                <p>PokemonApp</p>
                                <p>It's the frontend for a web application that runs in React with Nextjs. 
                                    It connects to an external API to get all the Pokemon data and displays
                                    the information and in the website.
                                </p>
                            </div>
                            <div>
                                <button>Git Repo</button>
                            </div>
                        </div>
                        <div className="project-card">
                            <div className="image-section">
                                <img alt="Project" src="./img-projects/frontend-challenge.png" width={"100%"}/>
                            </div>
                            <div className="card-body">
                                <p>Frontend Challenge</p>
                                <p>It's a small project where I learned how to use Responsive Design,
                                    added special fonts to the web page, and testing using Jest. 
                                </p>
                            </div>
                        </div>
                        <div className="project-card">
                            <div className="image-section">
                                <img alt="Project" src="./img-projects/jokesapp.png" width={"100%"}/>
                            </div>
                            <div className="card-body">
                                <p>JokeApp</p>
                                <p>It's a Web Application built on C# with ASP .Net MVC. The JokesApp is a simple 
                                    application that uses the Entity Framework ORM and connects to a database 
                                    given the connection string. The users can create an account and start adding 
                                    jokes to the application, which will be saved into a relational database.</p>
                            </div>
                            <div>
                                <button>Git Repo</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Projects;