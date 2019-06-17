function Currency(){
    y = document.getElementById("converter").value;
    return y;
}

function Calculate(){
y = Currency();

x = document.getElementById("value1").value;

if(x == ""){
    document.getElementById("value2").value = "";
}
else{
    switch(y){
        case "Dollar":
            document.getElementById("value2").value = x * 1.70;
        break;
    }
}
}