
 let wordLength:number = 10;
 let isLowerCharacters:boolean = false;
 let isUpperCharacters:boolean = false;
 let isNumbers:boolean = false;
 let isSpecialCharacters:boolean = false;


function getWordLength(value: number): void{
    wordLength = value;
}

function getIsLowerCharacters(value: boolean): void{
    isLowerCharacters = value;
}

function getIsUpperCharacters(value: boolean): void{
    isUpperCharacters = value;
}

function getIsNumbers(value: boolean): void{
    isNumbers = value;
}

function getIsSpecialCharacters(value: boolean): void{
    isSpecialCharacters = value;
}

function generateClick():void{
    let passwordField = document.getElementById('password');
    if(passwordField) passwordField.innerHTML=generatePassword();
    
}
