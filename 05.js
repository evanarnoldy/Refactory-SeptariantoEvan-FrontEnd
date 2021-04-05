var text_1 = "Mammals";
var text_2 = "Bruiser build";
const char = "*"
var noChar = []

text_1=text_1.toLowerCase();
var noOfCountsOfEachCharacter = {};
var getCharacter, counter, actualLength, noOfCount;
for (counter = 0, actualLength = text_1.length; counter <
actualLength; ++counter) {
   getCharacter = text_1.charAt(counter);
   noOfCount = noOfCountsOfEachCharacter[getCharacter];
   noOfCountsOfEachCharacter[getCharacter] = noOfCount ? noOfCount + 1: 1;
}
for (getCharacter in noOfCountsOfEachCharacter) {
   if(getCharacter!=' ')
   console.log(getCharacter + ":" +
   char.repeat(noOfCountsOfEachCharacter[getCharacter]));
}
console.log("\n")

text_2=text_2.toLowerCase();
var noOfCountsOfEachCharacter = {};
var getCharacter, counter, actualLength, noOfCount;
for (counter = 0, actualLength = text_2.length; counter <
actualLength; ++counter) {
   getCharacter = text_2.charAt(counter);
   noOfCount = noOfCountsOfEachCharacter[getCharacter];
   noOfCountsOfEachCharacter[getCharacter] = noOfCount ? noOfCount + 1: 1;
}
for (getCharacter in noOfCountsOfEachCharacter) {
   if(getCharacter!=' ')
   console.log(getCharacter + ":" +
   char.repeat(noOfCountsOfEachCharacter[getCharacter]));
}