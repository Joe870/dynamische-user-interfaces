function handle_click(event){
    value1 = 0
    value2 = 0
    value3 = 0
    if(event.target.id == 'knop1'){
        console.dir(event.target.parentElement);
        event.target.parentElement.classList.remove("click_2");
        event.target.parentElement.classList.remove("click_3");
        event.target.parentElement.classList.add("click_1");
        document.getElementById("small-image").style.backgroundImage = "url('1.jpg')";
        value1 +=1 
        console.log(value1)
        document.getElementById('knop1').innerHTML=value1
        }
    else if(event.target.id == 'knop2'){
        console.dir(event.target.parentElement);
        event.target.parentElement.classList.remove("click_1");
        event.target.parentElement.classList.remove("click_3");
        event.target.parentElement.classList.add("click_2");
        document.getElementById("small-image").style.backgroundImage = "url('2.jpg')";
        value2 +=1 
        console.log(value2)
        document.getElementById('knop2').innerHTML=value2
    }
    else{
        console.dir(event.target.parentElement);
        event.target.parentElement.classList.remove("click_1");
        event.target.parentElement.classList.remove("click_2");
        event.target.parentElement.classList.add("click_3");
        document.getElementById("small-image").style.backgroundImage = "url('3.jpg')";
        value3 +=1;
        console.log(value3);
        document.getElementById('knop3').innerHTML=value3;
    }
}
console.dir(knop1)
knop1.onclick = handle_click;
knop2.onclick = handle_click;
knop3.onclick = handle_click;




