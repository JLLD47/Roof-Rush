let playfield = document.getElementById("playfield")


let player


function gameLoop(){
    newPlayer()
    setInterval(updateGame, 16)
    

}


function newPlayer(){
    player = new Player(90 , 450)
    player.spawn()

}

function updateGame(){
    player.updatePosition()
}


gameLoop()


window.addEventListener("keydown", function(e){
    if( e.key === " "){
        player.jump()
         
    }
})
