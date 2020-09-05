try{
    function numCheckByIf(num){
        if(isNaN(num)){
            throw (new Error('Enter number!!'));
        }
        if(num>10 && num<100){
            console.log("Between 10-100.");
        }
        else{
            console.log("Not in Between 10-100.");
        }
    }
}
catch(e){
    console.log(e.name);
    console.log(e.message);
}

try{
    function numCheckBySwitch(num){
        if(isNaN(num)){
            throw (new Error('ONLY Enter number!!'));
        }
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
}
catch(er){
    console.log(er.name);
    console.log(er.message);
}
finally{   
    numCheckBySwitch(325);
}

try{
    function fib(elements){
        if(num<1){
            throw (new Error('Enter number greater than 0!'));
        }
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
}
catch(err){
    console.log(err.name);
    console.log(err.message);
}
finally{
    console.log('Errors in fibonacci recorded.');
}

numCheckByIf(65);
numCheckByIf("cheeku");
numCheckBySwitch("bubbly");
console.log(fib(6));
console.log(fib(-1));
