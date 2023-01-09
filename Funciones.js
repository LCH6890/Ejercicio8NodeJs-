function devuelveTrue() {
    return true
}

async function promesa() {
    return setTimeout(() => console.log ("Hola soy una promesa"), 5000);
}

function* generaIndices() {
    let indice = 0;
    while(true) {
    yield indice += 2
    }
}
const gen = generaIndices();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

