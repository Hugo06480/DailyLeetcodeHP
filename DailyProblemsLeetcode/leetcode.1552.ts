function maxDistance(position: number[], m: number): number {
    
    let map = new Map<number,number>();
    let ans = 0;
    position.forEach((element, index) => {
        for(let i = index +1 ; i < position.length; i++){
            const force:number = position[i] - element;
            map.set(force, (map.get(force) || 1) + 1);    
        }
    });

    console.log(map);
    for (let [key, value] of Array.from(map).reverse()) {
        if(value >= m){
            ans = key;
            break;
        }
      }
    
    return ans;
};

// console.log(maxDistance([1,2,3,4,7],3));
// console.log(maxDistance([5,4,3,2,1,1000000000],2));
console.log(maxDistance([1,2,3,4,5,6,7,8,9,10],4));