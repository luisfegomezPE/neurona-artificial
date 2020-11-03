function recibirdatos () {
    s1 = 0
    s2 = 0
    target = 0
    suma_ponderada = s1 * w1 + s2 * w2
    n = suma_ponderada / bias
    if (n >= 0) {
        a = 1
    } else {
        a = -1
    }
    error = target - a
    w1 += error * s1
    w2 += error * s2
    bias += error
}
let error = 0
let a = 0
let n = 0
let suma_ponderada = 0
let target = 0
let s2 = 0
let s1 = 0
let bias = 0
let w2 = 0
let w1 = 0
w1 = 0
w2 = 0
bias = 0
for (let index = 0; index < 12; index++) {
    recibirdatos()
}
basic.forever(function () {
	
})
