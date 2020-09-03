function onlyAlphabets(){
    console.log(/z/g.test('gaurangi.agrawal@newgen.co.in'))
    var str='gaurangi.agrawal@newgen.co.in';
    var exp=/g$/g;
    var res=str.search(exp);
    console.log(res);
}
onlyAlphabets()

function myFunction() {
    var str = "Hellooo World! Hello W3Schools!"; 
    var patt1 = /o+/g;
    var result = str.match(patt1);
    console.log(result)
}
myFunction()

var obj = /e/.exec("The best things in life are free!");
var result="Found " + obj[0] + " in position " + obj.index + " in the text: " + obj.input+" In the group: "+obj.groups;
console.log(result);