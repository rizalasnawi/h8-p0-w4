function changeVocals(str) {
    
    var vocal = 'aiueo'
    var kamus = 'abcdefghijklmnopqrstuvwxyz'
    var strBaru = ''
    var check = false
    
    for (i = 0; i < str.length; i++) {
        for (j = 0; j < vocal.length; j++) {
            if (vocal[j] === str[i] || vocal[j].toUpperCase() === str[i]) {
                for (k = 0; k < kamus.length; k++) {
                    if (kamus[k] === str[i] || kamus[k].toUpperCase() === str[i]) {
                        strBaru += kamus[k + 1]
                        check = true
                    }
                }
            }
        }
        if (check === false) {
            strBaru = strBaru + str[i]
        }
        check = false
    }
    return strBaru
}


function reverseWord(str) {
    var strBalik = ''
    for (i = str.length - 1; i >= 0; i--) {
        strBalik += str[i]
    }
    return strBalik
}

function setLowerUpperCase(str) {
    var strTukar = ''
    for (i = 0; i < str.length ; i++) {
        if (str[i] === str[i].toUpperCase()) {
            strTukar += str[i].toLowerCase()
        } else {
            strTukar += str[i].toUpperCase()
        }
    }
    return strTukar
}

function removeSpaces(str) {

    var strNoSpaces = str.split(' ').join('')

    return strNoSpaces
}

function passwordGenerator(name) {
    var strVocals = changeVocals(name)
    var strReverse = reverseWord(strVocals)
    var strSwitch = setLowerUpperCase(strReverse)
    var strRemove = removeSpaces(strSwitch)
    
    if (name.length < 5) {
        strRemove = 'Minimal karakter yang diinputkan adalah 5 karakter'
    }

    return strRemove
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'