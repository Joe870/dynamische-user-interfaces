let uitleg = "In een parkeergarage passen 80 auto's op de begane grond en 120 op een verdieping.\n"+
"Vraag het gewenste aantal auto's in de garage en bereken het aantal verdiepingen wat je nodig hebt.";


let gewenste_aantal_autos = prompt("Hoeveel autos wilt u kwijt in de parkeergarage?");
if (gewenste_aantal_autos <= 80){
    var verdiepingen = 1
}
else {
    var verdiepingen = Math.ceil((gewenste_aantal_autos - 80)/ 120)
}

console.log(verdiepingen)
// Berekenen hier het aantal verdiepingen

// let antwoord = "Ik heb nog geen idee hoeveel verdiepingen er moeten komen :-( ";
// document.getElementById("antwoord").innerText = verdiepingen;
var result = verdiepingen
antwoord.innerText = result
console.log("Om het gewenste aantal autos kwijt te kunnen heb ik "+result+" verdiepingen nodig.")
alert(result);
