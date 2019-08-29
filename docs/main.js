var canvas = document.getElementById("GameCanvas");
var ctx = canvas.getContext("2d");

var map = [
  [1, 0],
  [0, 1]
  ]

function render(contextIn, mapIn) {
  for (var y = 0; y < mapIn.length; y++) {
   for (var x = 0; x < mapIn.length; x++) {
     if (mapIn[y][x] == "1") {
       contextIn.fillStyle = "#00FF00"
     } else {contextIn.fillStyle = "#000000"}
     contextIn.fillRect(x * 20, y * 20, x * 20 + 20, y * 20 + 20); 
   }
 }
  
}

render(ctx, map);
