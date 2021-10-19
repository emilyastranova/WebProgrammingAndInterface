function minimum3(num1, num2, num3) {

    var smallest = Math.min(num1, num2);
    smallest = Math.min(smallest, num3);
    window.alert("Smallest number was "+ smallest);

}

function getUserNum() {

    var userNum1 = window.prompt("Input number 1");
    var userNum2 = window.prompt("Input number 2");
    var userNum3 = window.prompt("Input number 3");

    minimum3(userNum1, userNum2, userNum3);

}

window.addEventListener("load", getUserNum, false);