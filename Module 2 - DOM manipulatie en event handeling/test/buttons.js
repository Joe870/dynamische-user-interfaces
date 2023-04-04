function handle_click(event){
    if(event.target.id == 'knop1' || event.target.id == 'knop2' || event.target.id == 'knop3'){
        event.target.classList.add("new_image");
    }
    else{
        event.target.classList.toggle("new_image");
    }
}
console.dir(knop1)
knop1 = handle_click;
knop2 = handle_click;
knop3 = handle_click;