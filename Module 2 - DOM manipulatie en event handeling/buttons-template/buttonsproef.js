function handle_click(e){
    if(e.target.id == 'btn1'){
        e.target.classList.add('blue');
    }
    else{
        e.target.classList.toggle('blue');
    }
    result.innterHTML=`button met id: <strong>${e.target.id}</strong> was geklikt!`;
}

// handle_click({name:'this is my click-event', id:1234});
knop1.onclick = handle_click;
knop2.onclick = handle_click;
fake_button.onclick = handle_click;


