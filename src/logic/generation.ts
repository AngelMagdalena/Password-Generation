    let wordLength:number = 10;
    let isLowerCharacters:boolean = true;
    let isUpperCharacters:boolean = true;
    let isNumbers:boolean = true;
    let isSpecialCharacters:boolean = true;

    console.log(document.getElementById('word_lenght'));
    console.log(document.getElementById('lowerCharacters')?.attributes);
    
    const enum symbolTypes{
        lowerCharacter,
        upperCharacter,
        number,
        specialCharacter
    }
    
    function getRandomSymbolType(arr:any[]):any{
        return arr[Math.floor(Math.random() * arr.length)];
     }
    
     function getPossibleTypes():any[]{
         let possibleTypes = [];
         if(isLowerCharacters){
            possibleTypes.push(symbolTypes.lowerCharacter)
         }
         if(isUpperCharacters){
            possibleTypes.push(symbolTypes.upperCharacter)
         }
         if(isNumbers){
            possibleTypes.push(symbolTypes.number)
         }
         if(isSpecialCharacters){
            possibleTypes.push(symbolTypes.specialCharacter)
         }
         return possibleTypes;
     }
    
    function getRandomCharacter(str:string):string{
        return str[Math.floor(Math.random() * str.length)];
    }
    
    function getlowerCharacter():string{
        return getRandomCharacter(lowerCharacters);
    }
    
    function getUpperCharacter():string{
        return getRandomCharacter(upperCharacters);
    }
    
    function getNumber():string{
        return getRandomCharacter(numbers);
    }
    
    function getSpecialCharacter():string{
        return getRandomCharacter(specialCharacters);
    }
    
    function generatePassword():any{
        let password = '';
        let possibleType:any[] = getPossibleTypes();
        // if(wordLength > 80){
        //     wordLength = 80;
        // }
        for(let i = 0; i < wordLength; i++){
            let symbolType:any = getRandomSymbolType(possibleType);
            switch(symbolType){
                case symbolTypes.lowerCharacter:
                    password += getlowerCharacter();
                    break;
                case symbolTypes.upperCharacter:
                    password += getUpperCharacter();
                    break;
                case symbolTypes.number:
                    password += getNumber();
                    break;
                case symbolTypes.specialCharacter:
                    password += getSpecialCharacter();
                    break;
            }
        }
        // setPassword(password);
        return password;
    }
    
    // function setPassword(password: string): void{
    //     password = '';
    // }









