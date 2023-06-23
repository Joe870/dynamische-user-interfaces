character_stats = {}
player_pokemon = ''
rival_pokemon = ''
document.getElementById("move_damage").style.visibility = "hidden"
document.getElementById("move_defense").style.visibility = "hidden"
player_pokemon = {base_hp: 19, huidig_hp: 19, attack: 10, base_defense: 10, huidig_defense: 10, speed: 14}

rival_pokemon = {base_hp: 18, huidig_hp:18, attack:8, base_defense: 8, huidig_defense:8, speed: 10}

limit_lowering_defense_player = player_pokemon['base_defense']-6
console.dir(`${limit_lowering_defense_player} amount defense youre pokemon`)
limit_lowering_defense_rival = rival_pokemon['base_defense'] - 6
console.dir(`${limit_lowering_defense_rival} amount defense rival`)

moves_player = ['pound','leer'] 
moves_rival = ['scratch','tail_whip']

document.getElementById("stats").innerHTML += `you're hp: ${player_pokemon.base_hp} `
document.getElementById("stats").innerHTML += `you're attack: ${player_pokemon.attack} `
document.getElementById("stats").innerHTML += `you're defense: ${player_pokemon.base_defense} `
document.getElementById("stats").innerHTML += `you're speed: ${player_pokemon.speed} `

document.getElementById("stats").innerHTML += `wild pokemon hp: ${rival_pokemon.base_hp} `
document.getElementById("stats").innerHTML += `wild pokemon attack: ${rival_pokemon.attack} `
document.getElementById("stats").innerHTML += `wild pokemon defense: ${rival_pokemon.base_defense} `
document.getElementById("stats").innerHTML += `wild pokemon speed: ${rival_pokemon.speed} `

function handle_click(e){
    console.dir(this)
    this.style.visibility = "hidden";
    document.getElementById("move_damage").style.visibility = "visible"
    document.getElementById("move_defense").style.visibility = "visible"
}

function defense_move(e){
    document.getElementById("tekst").innerHTML = 'you used leer'
    if (rival_pokemon.huidig_defense > limit_lowering_defense_rival){
    rival_pokemon.huidig_defense = Math.round(rival_pokemon['huidig_defense'] - 1) 
    console.log('leer')
    } else {
        console.dir(rival_pokemon['huidig_defense'])
        console.dir(limit_lowering_defense_rival)
        document.getElementById("tekst").innerHTML = "wild pokemon defense stat won't go any lower"
        rival_pokemon['huidig_defense'] = limit_lowering_defense_rival
}
}

function attacking_move(e){
    document.getElementById("tekst").innerHTML = 'you used pound'
        attack_turn = player_pokemon['attack'] - rival_pokemon['huidig_defense']
        if (attack_turn <0){
            attack_turn = 1 
        }
    health = document.getElementById("rival_health")
    rival_health.value -= attack_turn
}

function rival_turn(e){
    rival_action = Math.floor(Math.random() * 10);
    if (rival_action <=5){
        document.getElementById("tekst").innerHTML = "the wild pokemon used pound"
        attack_turn = rival_pokemon['attack'] - player_pokemon['huidig_defense']
        if (attack_turn <0){
            attack_turn = 1 
        }
        health = document.getElementById("your_health")
        your_health.value -= attack_turn
    }
    else if (rival_action >5){
        if (player_pokemon.huidig_defense > limit_lowering_defense_player){
            player_pokemon.huidig_defense = Math.round(player_pokemon['huidig_defense'] - 1) 
            console.log('tail whip')
            } 
        else {
            document.getElementById("tekst").innerHTML = "you're pokemon defense stat won't go any lower"
            player_pokemon['huidig_defense'] = limit_lowering_defense_player
            document.getElementById("tekst").innerHTML = "the wild pokemon used tail whip"
        }
    }
}
move_defense.onclick = function(e) {defense_move(); setTimeout(rival_turn,1000)}
move_damage.onclick = function(e) {attacking_move(); setTimeout(rival_turn,1000)} 
fight.onclick = handle_click;
