function init() {
    var input = window.prompt("Input text");
    var div = document.getElementById("output");
    var headers = ["1","2","3","4","5","6"];
    console.log(headers[0]);
    for(var i in headers)
        div.innerHTML = div.innerHTML + "<h"+ headers[i] +">"+ input +"</h" + headers[i] + ">";
}

window.addEventListener("load", init, false);