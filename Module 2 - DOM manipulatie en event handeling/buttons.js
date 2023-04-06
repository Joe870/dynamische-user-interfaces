function handle_click(event){
    if(event.target.id == 'knop1'){
        getElementById("container").event.target.classList.toggle("click_1");
        event.target.classList.toggle("small-image1")

    }
    else if(event.target.id == 'knop2'){
        event.target.classList.toggle("click_2");
        event.target.classList.toggle("small-image2")
    }
    else{
        event.target.classList.toggle("click_3");
        event.target.classList.toggle("small-image3")
    }
}

console.dir(knop1)
knop1.onclick = handle_click;
knop2.onclick = handle_click;
knop3.onclick = handle_click;
