import { Outlet, useNavigate } from 'react-router-dom'
import './navigationBar.css'

function NavigationBar() {
    const navigate = useNavigate();
    return (
        <>
            <div className="container-bar">
                <div style={{height: '100%'}}>
                    <button className="nav-buttons" onClick={()=>navigate('/')}>
                        Home
                    </button>
                    <button className="nav-buttons" onClick={()=>navigate('/projects')}>
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