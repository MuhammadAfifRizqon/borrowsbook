nomor 4
function diagonalDifference(arr) {

    let leftToRight = 0;
    let rightToLeft = 0;
    
    for (let i = 0; i < arr.length; i++) {
        leftToRight = leftToRight + arr[i][i]
        rightToLeft = rightToLeft + arr[i][(arr.length - 1) - i]
        
    }
    
    return "maka hasilnya adalah 15 - 12 = "+ Math.abs((leftToRight - rightToLeft))
}

console.log(diagonalDifference( [[1, 2, 0], [4, 5, 6], [7, 8, 9]]));