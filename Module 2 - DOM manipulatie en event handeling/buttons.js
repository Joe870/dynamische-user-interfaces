function handle_click(event){
    if(event.target.id == 'knop1' || event.target.id == 'knop2' || event.target.id == 'knop3'){
        event.target.classList.toggle("new_image");
    }
    else{
        event.target.classList.toggle("new_image");
    }
}
console.dir(knop1)
knop1.onclick = handle_click;
knop2.onclick = handle_click;
knop3.onclick = handle_click;