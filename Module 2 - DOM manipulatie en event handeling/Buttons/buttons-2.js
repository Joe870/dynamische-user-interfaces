value1 = 0
value2 = 0
value3 = 0
container = document.getElementById('container')
function button_click(event){
    let nr = event.target.id.replace('button','');
    container.className = '';
    container.classList.add("click_"+nr);
    this.value = parseInt(this.value)+1 
    buttons = document.querySelectorAll('input')
    for (button of buttons){
        button.disabled = false
    }
    this.disabled = true
}

button1.onclick = button_click;
button2.onclick = button_click;
button3.onclick = button_click;

// function handle_click(event){
//     if(event.target.id == 'knop1'){
//         console.dir(event.target.parentElement);
//         event.target.parentElement.classList.remove("click_2");
//         event.target.parentElement.classList.remove("click_3");
//         event.target.parentElement.classList.add("click_1");
//         document.getElementById("small-image").style.backgroundImage = "url('1.jpg')";
//         value1 +=1;
//         console.log(value1);
//         document.getElementById('knop1').innerHTML=value1;
//         document.getElementById('knop1').style.backgroundColor="red";
//         document.getElementById('knop2').style.backgroundColor="transparent";
//         document.getElementById('knop3').style.backgroundColor="transparent";
//         document.getElementById('knop1').disabled=true;
//         document.getElementById('knop2').disabled=false;
//         document.getElementById('knop3').disabled=false;
//         }
//     else if(event.target.id == 'knop2'){
//         console.dir(event.target.parentElement);
//         event.target.parentElement.classList.remove("click_1");
//         event.target.parentElement.classList.remove("click_3");
//         event.target.parentElement.classList.add("click_2");
//         document.getElementById("small-image").style.backgroundImage = "url('2.jpg')";
//         value2 +=1; 
//         console.log(value2);
//         document.getElementById('knop2').innerHTML=value2;
//         document.getElementById('knop1').style.backgroundColor="transparent";
//         document.getElementById('knop2').style.backgroundColor="red";
//         document.getElementById('knop3').style.backgroundColor="transparent";
//         document.getElementById('knop1').disabled=false;
//         document.getElementById('knop2').disabled=true;
//         document.getElementById('knop3').disabled=false;
//     }
//     else{
//         console.dir(event.target.parentElement);
//         event.target.parentElement.classList.remove("click_1");
//         event.target.parentElement.classList.remove("click_2");
//         event.target.parentElement.classList.add("click_3");
//         document.getElementById("small-image").style.backgroundImage = "url('3.jpg')";
//         value3 +=1;
//         console.log(value3);
//         document.getElementById('knop3').innerHTML=value3;
//         document.getElementById('knop1').style.backgroundColor="transparent";
//         document.getElementById('knop2').style.backgroundColor="transparent";
//         document.getElementById('knop3').style.backgroundColor="red";
//         document.getElementById('knop1').disabled=false;
//         document.getElementById('knop2').disabled=false;
//         document.getElementById('knop3').disabled=true;
//     }
// }
// console.dir(knop1)
knop1.onclick = button_click;
knop2.onclick = button_click;
knop3.onclick = button_click;