export default function clickEffect(e) {
  var d = document.createElement("div");
  d.className = "clickFX";
  d.style.top = e.clientY + "px"; 
  d.style.left = e.clientX + "px";
  document.body.appendChild(d);
  var childWithClass = d.getElementsByClassName("clickFX");
  console.log(childWithClass);
  d.addEventListener('animationend', ()=>{ 
    d.parentElement.removeChild(d); 
  });
}