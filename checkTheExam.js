const checkExam = (array1, array2) => {
    let score = 0;

    for(let i = 0; i < array1.length;i++ ){
        if (array1[i] === array2[i]){
            score = score + 4;
        }else if (array1[i] !== array2[i]){
            score = score -1;
        }else if(array2[i] === ''){
            score = score + 0;
        }
        if(score < 0) {
            score = 0;
        }
    }
    return score;
}

let arr1 = ['a','a','b','b'];
let arr2 = ['a','c','c','b'];

console.log(checkExam(arr1,arr2))
