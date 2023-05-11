container = document.getElementById('container')
function button_click(event){
    let nr = event.target.id.replace('button','');
    container.className = '';
    container.classList.add("click_"+nr);
    this.value = parseInt(this.value)+1  
}

button1.onclick = button_click;
button2.onclick = button_click;
button3.onclick = button_click;
