//Write a script that will pick a random restaurant.
//The choices are Molinas, Sonic, Subway, McDonalds, Taco Bell, Pasanos, Lone Star Eatery, and Chicken Express 
//Your page should have an HTML form with a simple one-line text box that should display the name of the restaurant.
//When the user clicks the button, the page should display a random restaurant.
function getRestaurant() {
    var restaurant = ["Molina's", "Sonic", "Subway", "McDonalds", "Taco Bell", "Pasanos", "Lone Star Eatery", "Chicken Express"];
    var randomRestaurant = restaurant[Math.floor(Math.random() * restaurant.length)];
    document.getElementById("restaurantName").innerHTML = randomRestaurant;
}