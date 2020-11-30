
export function randomArray(len, n) {

    // Skapa en ny tom array av längd len
    const a = new Array(len)

    // Fyll varje plats i arrayen med ett random heltal
    for (let i = 0; i < a.length; i++) {
        a[i] = randomInt(n)
    }

    return a
}

function randomInt(n) {
    return Math.floor(Math.random() * (n + 1))
}

function swap(x, y, z) {
    let temp = a[y]
    a[y] = a[z]
    a[z] = temp
}

const a = [5, 8, 10, 9]

swap(a, 1, 3)

console.log(a)