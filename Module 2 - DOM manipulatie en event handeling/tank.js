var image = document.getElementById("image");

document.onkeydown = checkKey;
movement_speed = 1
top = 0
left =0
image.style.left = "0px"
image.style.top = "0px"
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
        object[3] += object[4];
        console.log(object);
        top -= movement_speed
        image.style.top = top.toString() + "px"
    } else if (e.keyCode == '40') { // down arrow
        console.log("down arrow");
        object[3] -= object[4];
        console.log(object);
        top += movement_speed
        image.style.top = top.toString() + "px"
    } else if (e.keyCode == '37') { // left arrow
        image.style.transform = "rotate(90deg)"
    	console.log("left arrow");
        object[2] += object[4];
        console.log(object);
        left -= movement_speed
        image.style.left = left.toString() + "px"
        posArray = image.style.backgroundPosition.split(' ');
        posArray[0] = (parseInt(posArray[0]) - 84) + 'px';
        console.dir(posArray)
        image.style.backgroundPosition = posArray.join(' ');
    } else if (e.keyCode == '39') {   // right arrow
        image.style.transform = "rotate(90deg)"
    	console.log("right arrow");
        object[2] -= object[4];
        console.log(object);
        left += movement_speed
        image.style.left = left.toString() + "px"
    	// image.style.backgroundPosition = // check goed de rupsband
        posArray = image.style.backgroundPosition.split(' ');
        posArray[0] = (parseInt(posArray[0]) + 84) + 'px';
        console.dir(posArray)
        image.style.backgroundPosition = posArray.join(' ');
    }
}

