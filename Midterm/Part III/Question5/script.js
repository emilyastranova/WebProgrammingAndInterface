//ask the user to enter in the length of the side of a cube
//convert the string to a number
//calculate and display the volume of the cube
//calculate and display the surface area of the cube
//calculate and display volume of the largest sphere that could fit in the cube
//calculate and display surface area of the largest sphere that could fit in the cube
//calculate and display volume of the space in between the cube and the sphere.
function init() {
    var side = prompt("Please enter the length of a side of the cube: ");
    var sideNum = parseInt(side);
    var volume = sideNum * sideNum * sideNum;
    var surfaceArea = 6 * (sideNum * sideNum);
    var largestSphere = Math.pow(sideNum / 2, 3) * Math.PI * 4/3;
    var sphereSurfaceArea = 4 * Math.PI * Math.pow(sideNum/2,2);
    var space = volume - largestSphere;
    document.write("The volume of the cube is " + volume + " cubic units." + "<br>");
    document.write("The surface area of the cube is " + surfaceArea + " square units." + "<br>");
    document.write("The volume of the largest sphere that could fit in the cube is " + largestSphere + " cubic units." + "<br>");
    document.write("The surface area of the largest sphere that could fit in the cube is " + sphereSurfaceArea + " square units." + "<br>");
    document.write("The volume of the space in between the cube and the sphere is " + space + " cubic units.");
}

window.addEventListener("load", init, false);