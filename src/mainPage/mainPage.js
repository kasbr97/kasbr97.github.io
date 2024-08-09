import './mainPage.css'

function MainPage() {
    return (
        <div className="App-header">
            <div className="container">
                <div className="App-shape"/>
                <h2>Hi! My name is <span className="name-color">Kevin Burga.</span></h2>
                <div className="main-description">
                    <p className="description-text">
                        I'm a Software engineer with experience as a Full stack developer using React with TypeScript and Python. 
                        I've leveraged Python with Flask and FastAPI to deliver backend solutions,
                        in addition to creating scripts to support data storage in small databases.
                        Other experiences include SQL, noSQL(mongoDB) and C#.
                    </p>
                    <div className='description-buttons'>
                        <a className="buttons-social" href="https://www.linkedin.com/in/kevinburgarojas/" rel="noopener noreferrer" target="_blank">
                            <img src="linkedinIcon.svg" className="linkedin-image" alt="LinkedIn"/>
                        </a>
                        <a className="buttons-social" href="https://github.com/kasbr97" rel="noopener noreferrer" target="_blank">
                            <img src="githubIcon.svg" className="github-image" alt="GitHub"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage;