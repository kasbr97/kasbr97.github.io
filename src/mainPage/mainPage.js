import './mainPage.css'

function MainPage() {
    const handleSocialButtonClick = (socialMedia) => {
        switch (socialMedia) {
            case 'linkedin':
                window.open("https://www.linkedin.com/in/kevinburgarojas/", "_blank");
                break;
            case 'github':
                window.open("https://github.com/kasbr97", "_blank");
                break;
            default:
                break;
        }
    }
    return (
        <div className="App-header">
            <div className="App-shape"/>
            <div className="Container">
                <h2>Hi! My name is <span className="name-color">Kevin Burga.</span></h2>
                <div className="Main-description">
                    <p className="Description-text">
                        I'm a Software engineer with 1 year experience as a Front-end developer using React with TypeScript. 
                        I've leveraged Python with Flask and FastAPI to deliver backend solutions,
                        in addition to creating scripts to support data storage in small databases.
                        Other experiences include SQL, noSQL(mongoDB) and Java.
                    </p>
                    <div className='Description-buttons'>
                        <button className="Buttons-Social" onClick={()=>{handleSocialButtonClick('linkedin')}}>
                            <img src="linkedinIcon.svg" className="linkedin-Image" alt="LinkedIn"/>
                        </button>
                        <button className="Buttons-Social" onClick={()=>{handleSocialButtonClick('github')}}>
                            <img src="githubIcon.svg" className="github-Image" alt="GitHub"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage;