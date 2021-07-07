//Adding
function addition_Function() {
    var addition = 2+2;
    document.getElementById("add").innerHTML = "2 + 2 = " + addition
}

//Subtracting-------------------------------------

function subtraction_Function() {
    var subtraction = 5-2;
    document.getElementById("subtract").innerHTML = "5 - 2 = " + subtraction;
}

//Multiplication-------------------------------------

function multiplicaton_Function() {
    var multiplicaton = 6*8;
    document.getElementById("multiplicaton").innerHTML = "6 * 8 = " + multiplicaton;
}

//Division-------------------------------------

function division_Function() {
    var division = 5-2;
    document.getElementById("division").innerHTML = "48 / 6 = " + division;
}

//PEMDAS-------------------------------------

function mor_math() {
    var som_math = (1+2) * 10 / 2 - 5;
    document.getElementById("som_math").innerHTML = "1 plus 2, muliplied by 10, divided in half and then subtarcted by 5 equals " + som_math;
}

//Remainder-------------------------------------

function modulus_Operator() {
    var simple_math = 25 % 6;
    document.getElementById("simple_math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_math;
}

//Turning Negative-------------------------------------

function negation_Operator() {
    var x = 5;
    document.getElementById("x").innerHTML = -x;
}

//Increacing by an increment of 1-------------------------------------

function Increace() {
    var y = 5;
    document.getElementById("y").innerHTML = y++;
}

//Decrease by an increment of 1-------------------------------------

function Decreace() {
    var z = 5.25;
    document.getElementById("z").innerHTML = z--;
}
//Picking a random Number-------------------------------------

window.alert(Math.random() * 100);
