function appendCharacters(s: string, t: string): number {
    const n = t.length;
    let tPointer = 0;

    // Iterate through the characters of s using an index-based loop
    for (let sPointer = 0; sPointer < s.length; sPointer++) {
        // Check if the characters match
        if (tPointer < n && s[sPointer] === t[tPointer]) {
            tPointer++;
        }
    }

    // Return the number of characters that need to be appended to s
    return n - tPointer;
};

let testStr1:string = "coaching";
let testStr2:string = "coding";

let testStr3:string = "abcde";
let testStr4:string = "a";

let testStr5:string = "z";
let testStr6:string = "abcde";

let testStr7:string = "ajkhe";
let testStr8:string = "juh";

// console.log(appendCharacters(testStr1,testStr2));
// console.log(appendCharacters(testStr3,testStr4));
// console.log(appendCharacters(testStr5,testStr6));
console.log(appendCharacters(testStr7,testStr8));

/* 

coaching coding 

coachingg

ajkheuh

*/