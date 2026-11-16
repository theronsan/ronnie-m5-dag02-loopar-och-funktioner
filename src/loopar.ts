// Importerar koden från scope.ts
import './scope'

// Dag 2, del 1: Loopar. Resultatet syns i Console (F12).

// UPPGIFT 1: skriv ut talen 1 till 10, ett per rad, med en for-loop.

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// UPPGIFT 2: skriv ut talen 10 till 1 (nedräkning) med en while-loop.
//            Skriv "Kaffe!" efter 1.

let countdown = 10
while (countdown > 0) {
    console.log('Countdown:', countdown)
    countdown--
}
console.log('Kaffe')

// UPPGIFT 3: gör samma sak som uppgift 1, men skriv bara ut jämna tal.
//            Tips: n % 2 === 0

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

// UPPGIFT 4: här är kaféets prislista. Skriv ut ett kvitto med en for...of-loop:
//            "Kardemummabulle: 35 kr" osv, och sist "Summa: ... kr".
const prislista: number[] = [35, 32, 59, 45]
const namnlista: string[] = [
    'Kardemummabulle',
    'Bryggkaffe',
    'Ostmacka',
    'Latte'
]
// Skriver ut varor och pris
for (let i = 0; i < namnlista.length; i++) {
    console.log(`${namnlista[i]}: ${prislista[i]} kr`)
}
// Skriver ut summan
let summa = 0
for (const pris of prislista) {
    summa += pris
}
console.log(`Summa: ${summa} kr`)

// TODO

// UPPGIFT 5 (utmaning): skriv ut en multiplikationstabell för 3:ans tabell,
//            "3 x 1 = 3" till "3 x 10 = 30".
