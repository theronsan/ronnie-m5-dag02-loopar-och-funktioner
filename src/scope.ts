const kafe = 'Kardemumma'

function visaNamn() {
    const recept = 'hemligt'
    console.log(kafe) // gissning:
    console.log(recept) // gissning:
}
visaNamn()

let räknare = 0
function ökaRäknare() {
    räknare = räknare + 1
}
ökaRäknare()
ökaRäknare()
console.log(räknare) // gissning:

function lokal() {
    let räknare = 100
    räknare++
    return räknare
}
console.log(lokal()) // gissning:
console.log(räknare) // gissning:

// Ta bort kommentaren på nästa rad och läs felet:
// console.log(recept);    // gissning:

for (let i = 0; i < 3; i++) {
    console.log('varv', i)
}
// Ta bort kommentaren på nästa rad och läs felet:
// console.log(i);         // gissning:
