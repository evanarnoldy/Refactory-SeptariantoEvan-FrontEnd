const numbers = [9,4,2,4,1,5,3,0]
const indeks = [];

numbers
    .filter((v, i) => v % 2 && indeks.push(i))
    .sort((a, b) => a - b)
    .forEach((v, i) => numbers[indeks[i]] = v);

console.log(numbers);