var canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
var mouseEvent="empty"
var last_position_of_x,last_position_of_y
var color="black"
var width_of_line=3
canvas.addEventListener("mousedown",mouse_down);
function mouse_down(e){
    color=document.getElementById("text-input").value
    mouseEvent="mousedown"
}
canvas.addEventListener("mouseup",mouse_up);
function mouse_up(e){
    mouseEvent="mouseUp"
}
canvas.addEventListener("mouseleave",mouse_leave);
function mouse_leave(e){
    mouseEvent="mouseleave"
}
canvas.addEventListener("mousemove",mouse_move);
function mouse_move(e){
 var current_position_x=e.clientX-canvas.offsetLeft
 var current_position_y=e.clientY-canvas.offsetTop
 if (mouseEvent=="mousedown"){
     ctx.beginPath()
     ctx.strokeStyle=color
     ctx.lineWidth=width_of_line
     console.log(last_position_of_x,last_position_of_y)
     console.log(current_position_x,current_position_y)
     ctx.moveTo(last_position_of_x,last_position_of_y)
     ctx.lineTo(current_position_x,current_position_y)
     ctx.stroke()
 }
 last_position_of_x=current_position_x
 last_position_of_y=current_position_y  
}