import './App.css';
import MainPage from './mainPage/mainPage';

function clickEffect(e) {
  var d = document.createElement("div");
  d.className = "clickEffect";
  d.style.top = e.clientY + "px"; d.style.left = e.clientX + "px";
  document.body.appendChild(d);
  d.addEventListener('animationend', function () { d.parentElement.removeChild(d); });
}
function App() {
  document.addEventListener('click', clickEffect);

  return (
    <div className="App">
      <div className="App-header">
        <div className="App-shape"/>
        <MainPage />
      </div>
    </div>
  );
}

export default App;
