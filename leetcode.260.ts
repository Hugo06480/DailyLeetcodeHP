function singleNumber(nums: number[]): number[] {
    let wrkArray = [...nums]
    let initialArray:number[] = []
    let finalArray = wrkArray.reduce((acc, curr) => {
        const indexOfCurr = acc.indexOf(curr);
        indexOfCurr === -1 ? acc.push(curr) : acc.splice(indexOfCurr,1)
        return acc;
    }, initialArray)

    console.log(finalArray)
    return finalArray
};


const testCase1:number[] = [1,1,2,3,2,5]