function heightChecker(heights: number[]): number {
    
    let res:number = 0;
    let sortedHeights:number[] = [...heights].sort((a,b) => a-b);

    sortedHeights.forEach((element,index) => {
        if(element !== heights[index]){
            res++;
        }
    });

    return res;
};

console.log(heightChecker([1,1,4,2,1,3]));