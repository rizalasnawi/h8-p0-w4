function totalDigitRekursif(angka) {
    // you can only write your code here!
    var strAngka = String(angka)
    var result = hitung(strAngka, strAngka.length, 0)

    return result
}

function hitung(number, total, index) {
    if (total == index) {
        return 0
    } else {
        return (Number(number[index]) + hitung(number, total, index + 1))
    }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
