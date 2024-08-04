import { Outlet, useNavigate } from 'react-router-dom'
import './navigationBar.css'

function NavigationBar() {
    const navigate = useNavigate();
    return (
        <>
            <div className="Container-bar">
                <div style={{height: '100%'}}>
                    <button className="Nav-Buttons" onClick={()=>navigate('/')}>
                        Home
                    </button>
                    <button className="Nav-Buttons" onClick={()=>navigate('/projects')}>
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