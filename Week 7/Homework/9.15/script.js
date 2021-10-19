function isEven(num) { return num % 2 == 0; }

function getUserNum() {

    var userNum = window.prompt("Input a number, exit by inputting -1");
    while(userNum != -1) {
        if(isEven(userNum))
            window.alert("Number is even");
        else
            window.alert("Number is odd")
        userNum = window.prompt("Input a number, exit by inputting -1");
    }

}

window.addEventListener("load", getUserNum, false);