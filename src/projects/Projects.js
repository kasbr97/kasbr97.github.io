import "./projects.css"

function Projects() {
    return (
        <>
            <div className="App-header">
                
                <div className="project-card">
                    <div className="image-section">
                        <img src="./img-projects/jokeApp.png" width={"100%"}/>
                    </div>
                    <div className="card-body">
                        <p>Project 1</p>
                        <p>Web Application built on C# with ASP .Net MVC. The JokesApp is a simple 
                            application that uses the Entity Framework ORM and connects to a database 
                            given the connection string. The users can create an account and start adding 
                            jokes to the application, which will be saved into the database. The jokes can 
                            then be edited, listed and deleted; however, only the user that created the 
                            joke, can edit and delete it, the other users can only read the joke.</p>
                    </div>
                </div>
                <div className="project-card">
                    <div className="image-section">

                    </div>
                    Project 2
                </div>
            </div>
        </>
    )
}

export default Projects;