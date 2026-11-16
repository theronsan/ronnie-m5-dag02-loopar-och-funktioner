const kafe = 'Kardemumma'

function visaNamn() {
    const recept = 'hemligt'
    console.log(kafe) // gissning: Kardemumma (en funktionen kan hitta/läsa globala varibler)
    console.log(recept) // gissning: hemligt (variabeln deklareras inom funktionen och kan därför hittas/läsas)
}
visaNamn()

let räknare = 0
function ökaRäknare() {
    räknare = räknare + 1
}
ökaRäknare()
ökaRäknare()
console.log(räknare) // gissning: 2 (funktionen körs två gånger. Första gången blir 0+1=1, andra gången är räknaren 1, och då blir 1+1=2)

function lokal() {
    let räknare = 100
    räknare++
    return räknare
}
console.log(lokal()) // gissning: 101 (först är räknaren 100 och därefter ökas räknare med 1, (100+1=101))
console.log(räknare) // gissning: 2 (det borde bli 2 eftersom console.log(räknare) skriver ut variabeln räknare från exemplet ovan och inte från funktionen lokal() )

// Ta bort kommentaren på nästa rad och läs felet:
console.log(recept) // gissning: undefined (kan inte hitta variabeln)

for (let i = 0; i < 3; i++) {
    console.log('varv', i)
}
// Ta bort kommentaren på nästa rad och läs felet:
console.log(i) // gissning: undefined (eftersom i är deklarerad innanför for-loopen)

// VAD EN FUNKTION KAN OCH INTE KAN SE
// En funktion kan se variabler som är skapade utanför sitt scope. Globala variabler kan läsas av allt/alla.
// Men en funktion kan inte från utsidan hitta eller läsa variabler som ligger innanför en funktion eller ett block.
