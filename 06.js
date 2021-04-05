const list_letters_first = ["c","d","e","g","h"]
const list_letters_second = ["X","Z"]
const str1 = list_letters_first.join('')
const str2 = list_letters_second.join('')

function skippedLetter(str1) {
    if (!str1.match(/^[a-zA-Z]+$/)) return;
    var letter = "", offset = str1.charCodeAt(0);
    for (var i = 1; i < str1.length; i++) {
        var diff = str1.charCodeAt(i) - i - offset;
        if (diff == 1) letter += String.fromCharCode(i + offset++)
        else if (diff) return;
    }
    if (letter.length == 1) return letter;
}

function skippedLetter(str2) {
    if (!str2.match(/^[a-zA-Z]+$/)) return;
    var letter = "", offset = str2.charCodeAt(0);
    for (var i = 1; i < str2.length; i++) {
        var diff = str2.charCodeAt(i) - i - offset;
        if (diff == 1) letter += String.fromCharCode(i + offset++)
        else if (diff) return;
    }
    if (letter.length == 1) return letter;
}

console.log("list_letters_first = " + skippedLetter(str1))
console.log("list_letters_second = " + skippedLetter(str2))