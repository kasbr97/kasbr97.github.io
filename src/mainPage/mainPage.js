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
        <div className="Container">
            <h2>Hi! My name is Kevin Burga</h2>
            <div className="Main-description">
                <p className="Description-text">
                    I'm a Software engineer with 1 year experience as a Front-end developer using React with TypeScript. 
                    With additional experience experience in Python, SQL, noSQL(mongoDB), Java.
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
    )
}

export default MainPage;