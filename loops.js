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

for(let x in programming){
    console.log(programming[x]);
}






