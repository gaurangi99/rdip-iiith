console.log('START');
function functions_test(){

    function test(x, y=1){
        return [x,y];
    }
    console.log(test(4,2));
    console.log(test(4));

    function multiply(a,b){
        b=(typeof b!=='undefined')?b:1;
        return a*b;
    }
    console.log(multiply(4,2));
    console.log(multiply(4));
    console.log(multiply(4,'21'));
    console.log(multiply(4,'2john'));

    function example1(num=1){
        console.log(typeof num);
    }
    example1();
    example1(2);
    example1(undefined);
    example1(NaN);
    example1('')
    example1(null)

    function example2(val, arr=[]){
        arr.push(val);
        return arr;
    }
    console.log(example2(111))
    console.log(example2('gaur'))

    function example3(a = go()) { // Throws a `ReferenceError` when `f` is invoked.
    function go() { return ':P' }
    }
    //example3()   results in error

    function f(a, b = () => console.log(a)) {
        var a = 1
        b() // Prints `undefined`, because default parameter values exist in their own scope
    }
    f()
}

functions_test()
console.log('END');