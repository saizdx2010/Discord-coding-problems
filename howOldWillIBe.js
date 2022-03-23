const howOldWillIBe = (birthYear, futureYear) => {
    if(birthYear < futureYear){
        if (futureYear - birthYear === 1){
            return "You are 1 year old.";

        }else if(futureYear - birthYear > 1){
            return `You are ${futureYear - birthYear} years old.`
        }
    }
    else if(birthYear > futureYear){
        if (birthYear - futureYear === 1){
            return "You will be born in 1 year.";
            }else if(birthYear - futureYear > 1) {
            return `You will be born in ${birthYear - futureYear} years.`
            }
    }
    else if (birthYear === futureYear){
        return 'You were born this very year!'
    }

}