const betweenYears = (present,past) =>{

    const presentArr= present.split(' ');
    const pastArr = past.split(' ');

    const presentYear = presentArr.forEach(element => {
        return element;
    });




    return `${presentYear} - ${presentArr}`;
}


console.log(betweenYears("2015/10/10","1997/10/10"));