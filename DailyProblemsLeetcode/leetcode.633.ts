function judgeSquareSum(c: number): boolean {
    
    let res:boolean = false;
    let a:number = 0;
    let b:number = Math.floor(Math.sqrt(c));
    while (res === false && a <=b) {

        let calc:number = (Math.pow(a,2)+Math.pow(b,2));
        if(calc === c){
            res = true;
        }else if( calc > c){
            b--;
        }else {
            a--;
        }

    }

    return res;
};

console.log(judgeSquareSum(5))
console.log(judgeSquareSum(3))
console.log(judgeSquareSum(2147482647))