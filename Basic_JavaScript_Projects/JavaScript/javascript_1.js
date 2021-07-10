function Food_Function () {
    var food_output;
    var food = document.getElementById("Food_input").value;
    var food_string = " is a delicious food!";
    switch (food) {
        case "Steak":
            food_output = "Steak" + food_string;
        break;
        case "Grilled Cheese":
            food_output = "Grilled Cheese" + food_string;
        break;
        case "Cheese Burger":
            food_output = "Cheese Burger" + food_string;
        break;
        case "Mac & Cheese":
            food_output = "Mac & Cheese" + food_string;
        break;
        case "Chicken Nuggets/Strips":
            food_output = "Chicken Nuggets/Strips" + food_string;
        break;
        case "Tatter Tots":
            food_output = "Tatter Tots" + food_string;
        break;
        default:
        food_output = "Please enter a food exactly as written on the above list.";
    }
    document.getElementById("output").innerHTML = food_output;
}