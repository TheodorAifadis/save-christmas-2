import { randomArray } from './helpers.js'
import { swap } from  './helpers.js'

const a = randomArray(100, 10)

function bubbleSort(arr) {
    for (let z = 0; z < a.length - 1; z++) {
        for (let y = 0; y < a.length - 1 - z; y++){
            if (a[y] > a[y + 1]) {
                swap(a, y, y + 1)
            }
        }
    }
}