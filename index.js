let playField = document.getElementById('playfield')














let platform
let firstPlatforms

//Platform
function newPlatform(){
    platform = new Platforms()
    platform.insert()

}
function firstPlatform(){
    firstPlatform = new FirstPlatforms()
    firstPlatform.insert()
}
newPlatform()
firstPlatform()