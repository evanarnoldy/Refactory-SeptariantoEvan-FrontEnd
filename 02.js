const char = "*"
const kataban = ['dolor', 'elit', 'quis', 'nisi', 'fugiat', 'proident', 'laborum']
const kalimat = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

const censor = (kalimat) =>
  kalimat.split(' ').reduce((acc, word) =>
    acc + ' ' + (kataban.includes(word) ? char.repeat(word.length) : word), '')

const censored = censor(kalimat).trim()

console.log(censored)