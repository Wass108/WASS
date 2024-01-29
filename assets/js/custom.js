/*var name=document.getElementById("name");
name.value="tsig";*/
//console.log(document.getElementById("name") ;
//document.getElementById("name").click=checkname()
function checkname(){

    console.log(document.getElementById('inputname').value)
    if (document.getElementById('inputname').value== "") {
        document.getElementById('divname').innerText="champobligatoire"
    }
}
/*
var a=0
while (a<10) {
    
    a= a+1
}
//alert(a)
for (var b = 0; b < 15; b++) {
    
}
//alert(b)

for (var index = 1; index < 5+1; index++) {
    
    console.log(index)
}

function baguette() {
    a=a+b
    alert(a)
}
baguette()
function addition(a,b) {
    return a;
    
}
*/
var result = 8 % 2 > 0 || (3%2<1); 
console.log(result)