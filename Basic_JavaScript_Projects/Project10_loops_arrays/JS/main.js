function count_to_ten() {//counts to ten using a while loop while x is less than 11 add 1 and print.
    var digit= "";
    var x = 1;
    while (x<11) {
        digit += "<br>" + x;
        x++;
    }
    document.getElementById("counting_to_ten") .innerHTML = digit;
}

var insturments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var content = "";
var y;
function for_loop() { //created a for loop so document.write is not nedded for every insturment
    for (y=0; y<insturments.length; y++){
    content += insturments[y] + "<br>";
    }
    document.getElementById("List_of_instruments").innerHTML = content 
}

function cat_pics() { //creates an array that displays text based on the position of array chosen. 
    var cat_pictures = [];
    cat_pictures [0] = "sleeping";
    cat_pictures [1] = "playing";
    cat_pictures [2] = "eating";
    cat_pictures [3] = "purring";
    document.getElementById("Cat") .innerHTML = "In this picture, the cat is " + cat_pictures[2] + ".";
}

var x = 82;//global variable 
document.write(x);
{
    let x =33;//block variable lets x equal something else while not effecting the global variable. 
    document.write("<br>" + x);
}
document.write("<br>"+ x);//global variable 
