// let cars = ['a', 'b', 'c', 'd', 'e'];
// for(let i = 0; i<cars.length; i++){
//     console.log(i);
// }
// languages.forEach( (value, i) => {
//     console.log(value, i);
// } )
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
// Object destrcuting
let {languages, difficulty} = programming;

for (let k in programming) {
  console.log(k, " ",programming[k]);
}
