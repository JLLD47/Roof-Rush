let playfield = document.getElementById('playfield')














let platform

//Enemy
function newPlatform(){
    platform = new Platforms()
    platform.insert()
}
newPlatform()