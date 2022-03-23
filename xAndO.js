function XO(str) {
    //code here
    const arrXO = Array.from(str);
    const exes =arrXO.filter(x => x === 'x' || x === 'X');
    const os =arrXO.filter(o => o === 'o' || o === 'O');
    const result = exes.length === os.length ? true : false;
    return result;
}

console.log(XO('xoxoxOo'))
