let playField = document.getElementById('playfield')
let restartView = document.getElementById('restart')


function endGame(){

    playField.style.display = 'none'
    restart.style.display = 'block'
}










let platform
let firstPlatforms
let obstacle

//Platform
function newPlatform(){
    platform = new Platforms()
    platform.insert()
    platform.insertObstacle()

}
function firstPlatform(){
    firstPlatform = new FirstPlatforms()
    firstPlatform.insert()
}
newPlatform()

