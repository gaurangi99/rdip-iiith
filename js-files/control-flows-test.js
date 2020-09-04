function numCheckByIf(num){
    if(num>10 && num<100){
        console.log("Between 10-100.");
    }
    else{
        console.log("Not in Between 10-100.");
    }
}

function numCheckBySwitch(num){
    var q=Math.floor(num/10);
    switch(q){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:console.log("Between 10-100.");
                break;
        default:console.log("Not in Between 10-100.");
                break;
    }
}

function fib(elements){
    if(elements==1){
        return 0;
    }
    else if(elements==2){
        return 1;
    }
    else{
        var fibNum=fib(elements-1)+fib(elements-2);
        return fibNum;
    }
}

numCheckByIf(65);
numCheckBySwitch(325);
console.log(fib(6));
