import { Outlet } from 'react-router-dom'
import './navigationBar.css'

function NavigationBar() {
    return (
        <>
            <div className="Container-bar">
                <div style={{height: '100%'}}>
                    <button className="Nav-Buttons">
                        Home
                    </button>
                    <button className="Nav-Buttons">
                        Projects
                    </button>

                </div>
            </div>
            
            <div>
                <Outlet/>
            </div>
        </>
    )
}

export default NavigationBar