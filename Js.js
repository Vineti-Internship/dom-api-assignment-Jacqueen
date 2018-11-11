x = 130  
y = 70   
r = 45  
a = 0  
start.onclick = function(){
  

function rotate(a) {
  
  var px = x + r * Math.cos(a); 
  var py = y + r * Math.sin(a);
  
  document.querySelector('#point').style.left = px + "px";
  document.querySelector('#point').style.top = py + "px";  
}


setInterval(function() {
  a = (a + Math.PI / 360) % (Math.PI * 2);
  rotate(a);
}, 5);
}
stop.onclick = function(){

}