/*
w93CLItrollbox
(c) speedyplane2247 2017-2018
Under MIT license
Version: 1.0
*/
le._apps.trollbox = {
exec: function() {
var Args = this.arg.arguments;
function loadJS (source, onready){
  var sc = document.createElement("script");
  sc.src = source;
  sc.type = "text/javascript";
  if (onready) sc.addEventListener("load", onready);
  document.head.appendChild(sc);
  return sc;
}
// thanks DraecoZ12
loadJS("http://www.windows93.net:8081/socket.io/socket.io.js")
socket.emit('message', Args);
console.log(Args)
},
hascli: true,
terminal: true,
}
