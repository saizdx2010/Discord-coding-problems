const strCount = (str,letter) => {
    charCount = 0;
    strArray = Array.from(str)

    for(let i = 0; i < strArray.length; i++){
        if(strArray[i] === letter){
            charCount += 1;
        }
    }

    return charCount;


}

console.log(strCount('hello', 'l'))