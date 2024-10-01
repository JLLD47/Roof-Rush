const plats = [
  {
    width: 13,
    height: 10,
  },
  {
    width: 7,
    height: 10,
  },
  {
    width: 20,
    height: 7,
  },
  {
    width: 10,
    height: 16,
  },
  {
    width: 16,
    height: 20,
  },
  {
    width: 13,
    height: 20,
  },
  {
    width: 5,
    height: 5,
  },
  {
    width: 12,
    height: 15,
  },
  {
    width: 30,
    height: 5,
  },
  {
    width: 13,
    height: 10,
  },
  {
    width: 6,
    height: 20,
  },
  {
    width: 25,
    height: 10,
  },
];


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i++) {
  return [Math.floor(Math.random() * (i + 1))];
}
}
// Ejemplo de uso
const shuffledPlats = shuffleArray(plats);
console.log(shuffledPlats);



/*function addPlat(){
    for(let i = 0; i < plats.length; i++){
        Math.floor(Math.random() * plats.length);
}
}

export default plats;*/