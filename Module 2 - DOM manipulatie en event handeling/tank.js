var image = document.getElementById("image");

document.onkeydown = checkKey;
image.style.transform = "rotate(90deg)"
x0 = -4;
image.style.backgroundPosition =  `-4px 0px`;

function checkKey(e) {
    var object = {height_tank:84, witdth_tank:84, x_start_position: -4,
    y_start_position:0, tank_speed:84};
	console.log("key nr = " + e.keyCode);
    e = e || window.event;
    if(e.keyCode == 32){
    	console.log("spacebar");
    } else if (e.keyCode == '38') {  // up arrow
        console.log("Up arrow");
    } else if (e.keyCode == '40') { // down arrow
        console.log("down arrow");
    } else if (e.keyCode == '37') { // left arrow
    	console.log("left arrow");
    } else if (e.keyCode == '39') {   // right arrow
    	console.log("right arrow");
    	// image.style.backgroundPosition = // check goed de rupsband
        posArray = image.style.backgroundPosition.split(' ');
        posArray[0] = (parseInt(posArray[0]) + 84) + 'px';
        console.dir(posArray)
        image.style.backgroundPosition = posArray.join(' ');
    }
}

var tID; //we will use this variable to clear the setInterval()
function animateScript() {
var    position = 80; //start position for the image slicer
const  interval = 100; //100 ms of interval for the setInterval()
tID = setInterval ( () => {
document.getElementById("image").style.backgroundPosition = 
`-${position}px 0px`; 
//we use the ES6 template literal to insert the variable "position"
if (position < 672)
{ position = position + 80;}
//we increment the position by 256 each time
else
{ position = 80; }
//reset the position to 256px, once position exceeds 1536px
}
, interval ); //end of setInterval
} //end of animateScript()