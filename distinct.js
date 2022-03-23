function distinct(a) {
    let arr = Array.from(a);
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j< arr.length; i++){
            if(arr(j) !== arr(i)){
                newArray.push(j);
            }
        }
    }
    return arr;
  }

  console.log(distinct(1,1,2));