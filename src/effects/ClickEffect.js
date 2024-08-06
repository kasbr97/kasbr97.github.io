export default function clickEffect(e) {
  var d = document.createElement("div");
  d.className = "click-effects";
  d.style.top = e.clientY + "px"; 
  d.style.left = e.clientX + "px";
  document.body.appendChild(d);
  var childWithClass = d.getElementsByClassName("click-effects");
  console.log(childWithClass);
  d.addEventListener('animationend', ()=>{ 
    d.parentElement.removeChild(d); 
  });
}