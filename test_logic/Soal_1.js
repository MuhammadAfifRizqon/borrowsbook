let soal = 'NEGIE1'
let arraySoal = soal.split('')
let reverseS = arraySoal.reverse().join('').split('')
let temp = reverseS.shift(0)
let hasil = reverseS.push(temp)
console.log(temp);
console.log(reverseS);