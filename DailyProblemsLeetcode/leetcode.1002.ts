function commonChars(words: string[]): string[] {
    const charArray = words.reduce((commonCharArray:string[], currValue) => {
        let newCommonCharArray:string[] = [];
        currValue.split('').forEach(element => {
            if(commonCharArray.includes(element)){
                newCommonCharArray.push(element);
                commonCharArray.splice(commonCharArray.indexOf(element),1)
            }
        });
        return newCommonCharArray; 
    }, words[0].split(''))


    return charArray;
};

console.log(commonChars(["bella","label","roller"]));
console.log(commonChars(["cool","lock","cook"]));