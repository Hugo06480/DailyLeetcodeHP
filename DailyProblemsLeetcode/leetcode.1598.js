function minOperations(logs) {
    let deep = 0;
    logs.forEach(element => {
        if (element === "../"){
            if(deep > 0) deep--;
        }
        else if ( element !== "./"){
            deep++;
        }
    });
    return deep;
};