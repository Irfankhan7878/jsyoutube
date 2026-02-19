const marvel_heros = ["thor", "Ironman", "Spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// marvel_heros.concat(dc_heros)
// console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);



// const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7,[4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)
// INFINITY MTLB array ke andar kase bhi aarays values ho aaray ke andar uske andar ek or array sb spread out hojati ha 

console.log(Array.isArray("Hitesh")) // isko array check kiya nhi ha 
console.log(Array.from("Hitesh")) // niche from se array bna diya kisi bhi fomr me hota chahe fir 

console.log(Array.from({name: "hitesh"})) // isk aoutput empty aayega kyoki hmne yh akey define nhi ki ha ki kiska arrya bana ha name ka ya hitehs ka specify nhi ha 

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
