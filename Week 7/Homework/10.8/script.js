function init() {

    var f = [1,2,3,4,5,6,7];
    console.log("Array F 7th Element: " + f[6]);

    var g = [8,8,8,8,8];

    var c = [];
    for(var i = 0; i < 100; i++) {
        c[i] = i+1;
    }
    var total = 0;
    for(var i = 0; i < c.length; i++) {
        total = total + c[i];
    }
    console.log("Array C Total: " + total);

    var a = [1,2,3,4,5,6,7,8,9,10,11];
    var b = []
    for(var i = 0; i < 34; i++) {
        b[i] = i+1;
    }
    console.log("Array A: " + a);
    console.log("Array B: " + b);
    b = a.concat(b);
    console.log("Copy Array A into B: " + b);

    
    var w = []
    for(var i = 0; i < 99; i++) {
        w[i] = Math.random()*100.01
    }
    var smallest = w[0];
    var largest = w[0];
    for(var i = 0; i < w.length; i++){
        if(w[i] < smallest)
            smallest=w[i];
        if(w[i] > largest)
            largest = w[i];
    }
    console.log("Array W: "+ w);
    console.log("Largest Val: " + largest)
    console.log("Smallest Val: " + smallest);
}

window.addEventListener("load", init, false);