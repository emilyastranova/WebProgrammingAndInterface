function init(){
    string1 = document.getElementById("string1").value;
    console.log(string1);
    string2 = document.getElementById("string2").value;
    console.log(string2);

    var result = "";
    if(string1 < string2)
        result = "String 1 is less than String 2";
    else if(string1 > string2)
        result = "String 1 is greater than String2";
    else if(string1 === string2)
        result = "String 1 is equal to String 2";
    
    window.alert(result);
}
window.addEventListener("submit", init, false);