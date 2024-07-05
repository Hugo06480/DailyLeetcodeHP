function longestPalindrome(s: string): number {
    
    const palindromeLengthSet:Set<string> = new Set<string>();

    let longestPalindromeLength:number = 0;


    for(let char of s) {
        if(palindromeLengthSet.has(char)) {
            palindromeLengthSet.delete(char);
            longestPalindromeLength += 2;
        } else {
            palindromeLengthSet.add(char);
        }
    }

    if(palindromeLengthSet.size > 0) {
        longestPalindromeLength++;
    }

    return longestPalindromeLength;
};


let str1:string = "abccccdd"
let str2:string = "abccccd"
console.log(longestPalindrome(str2))

/*

abcedbd

*/