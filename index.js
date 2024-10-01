let playField = document.getElementById('playfield')














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
firstPlatform()