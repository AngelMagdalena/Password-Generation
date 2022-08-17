    let wordLength:number = 10;
    let isLowerCharacters:boolean = true;
    let isUpperCharacters:boolean = true;
    let isNumbers:boolean = true;
    let isSymbols:boolean = true;
    
    const enum symbolTypes{
        lowerCharacter,
        upperCharacter,
        number,
        symbol
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
         if(isSymbols){
            possibleTypes.push(symbolTypes.symbol)
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
    
    function getSymbol():string{
        return getRandomCharacter(symbols);
    }
    
    function generatePassword():string{
        let password = '';
        let possibleType:any[] = getPossibleTypes();
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
                case symbolTypes.symbol:
                    password += getSymbol();
                    break;
            }
        }
        return password;
    }
    
    console.log(generatePassword());








