
function maxWordLength(params) {
	
	arrayPerkata = params.split(" "); 

    tempParams = 0 
    jumlahArray = arrayPerkata.length - 1  
    for (i = 0; i<jumlahArray; i++ ) {  
        panjang = arrayPerkata[i].length   
        if (tempParams < panjang) { 
        
            tempParams = panjang 
        kataTerpanjang = arrayPerkata[i] 
        } 
    }
    return "kata terpanjang adalah " + kataTerpanjang;
}

console.log(maxWordLength("Saya sangat senang mengerjakan soal algoritma"));