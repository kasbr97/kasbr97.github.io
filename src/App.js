import './App.css';
import clickEffect from './effects/ClickEffect';
import MainPage from './mainPage/mainPage';
import NavigationBar from './navigationBar/navigationBar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavigationBar/>,
    children: [
      {
        path: "/",
        element: <MainPage/>
      },

    ]
  }
])

function App() {
  document.addEventListener('click', clickEffect);

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
