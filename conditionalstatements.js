// If-Else:
function getGrade(score) {
    let grade;
    // Write your code here
    if(score>25 && score<=30){
        grade='A';
    }
    else if(score>20 && score<=25){
        grade='B';
    }
    else if(score>15 && score<=20){
        grade='C';
    }
    else if(score>10 && score<=15){
        grade='D';
    }
    else if(score>5 && score<=10){
        grade='E';
    }
    else if(score=>0 && score<=5){
        grade='F';
    }
    return grade;
}

//Loops
const vowels = 'aeiou';
let consonent = '';
function vowelsAndConsonants(s) {
    for(let letter of s) {
        if(vowels.includes(letter)) {
            console.log(letter)
        }else {
            consonent += letter + '\n';
        }
        
        
    }
    console.log(consonent)   
}
//Switch Cases
function getLetter(s) {
    let letter;
    // Write your code here
    switch(true) {
        case 'aeiou'.includes(s[0]):
            letter = 'A';
            break;
        case 'bcdfg'.includes(s[0]):
            letter = 'B';
            break;
        case 'hjklm'.includes(s[0]):
            letter = 'C';
            break;
        case 'npqrstvwxyz'.includes(s[0]):
            letter = 'D';
            break;
    }
    return letter;
}

