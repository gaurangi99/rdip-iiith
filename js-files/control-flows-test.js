function numCheckByIf(num){
    if(num>10 && num<100){
        console.log("Between 10-100.");
    }
    else{
        console.log("Not in Between 10-100.");
    }
}

function numCheckBySwitch(num){
    var q=num/10;
    switch(q){
        case 10:
        case 20:
        case 30:
        case 40:
        case 50:
        case 60:
        case 70:
        case 80:
        case 90:console.log("Between 10-100.");
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
numCheckBySwitch(4334);
console.log(fib(6));
