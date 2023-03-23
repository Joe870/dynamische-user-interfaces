prijs = 0;
soort_bestelling = '';
meer_bestellen = 'ja'
antwoord = document.getElementById('antwoord');
bestelling_lijst = {'fris': 2.0,'bier':2.5,'wijn':3.0};
function bestelling(bestelling_lijst){
    soort_bestelling = prompt('wat wilt uw bestellen?');
    aantal_bestelling = prompt('hoeveel wilt uw hiervan bestellen?');
    prijs_bestelling = bestelling_lijst[soort_bestelling] * aantal_bestelling;
    if (soort_bestelling in bestelling_lijst){
        prijs += prijs_bestelling
        document.write(aantal_bestelling + " " + "x" + " " + soort_bestelling + "<br>");
        document.write(prijs_bestelling + " " + "euro" + "<br>");
    }
    else {
        document.write('dit hebben wij niet' + "<br>")
    }
}

while (meer_bestellen = 'ja'){ 
    bestelling(bestelling_lijst)
    meer_bestellen = prompt('wil je nog wat bestellen?');
}
document.write("totale prijs:" + " " + prijs + " " + "euro" + "<br>")


