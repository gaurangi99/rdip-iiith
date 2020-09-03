function nameValForm(){
    var n=document.forms["nameForm"]["name"].value;
    if(n==''){
        alert("Please fill, field necessary!");
        return false;
    }
}

function phoneValForm(){
    var p=document.forms["phoneForm"]["phone"].value;
    var text;
    if(isNaN(p) || p<1 || p>10){
        text='Invalid input';
    }
    else{
        text='Valid input!';
    }
    document.getElementById("pno").innerHTML=text;
}



function nameValForm(){
    var n=document.forms["myForm"]["name"].value;
    if(n=='' || n==' '){
        alert("Please fill, field necessary!");
        return false;
    }
}

function phoneValForm(){
    var p=document.getElementById("phone").value;
    var text;
    if(isNaN(p) || p<1000000000 || p<10000000000){
        text='Invalid input';
    }
    else{
        text='Valid input!';
    }
    document.getElementById("pno").innerHTML=text;
}

// function checkForm(){
//     if(document.checkForm.)
// }