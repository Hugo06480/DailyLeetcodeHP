function scoreOfString(s: string): number {

    const score = s.split('').reduce((score, curr, index, array) => {
        return index < array.length-1 ? score+= Math.abs(curr.charCodeAt(0) - array[index+1].charCodeAt(0)): score;
    }, 0)

    return score;  
};

console.log(scoreOfString("hello"));