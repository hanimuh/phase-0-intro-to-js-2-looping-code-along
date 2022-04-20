// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names) {
let cards= [];
for (let i = 0; i < names.length; i++) {
cards.push (`Thank you, ${names[i]}, for the wonderful surprise gift!`);
debugger;
}

return cards;
}

console.log (writeCards(names));

function countDown (num){
    let count= num;
    while (count >= 0 || count === num){
        console.log(count--)
    }
}
countDown(10)