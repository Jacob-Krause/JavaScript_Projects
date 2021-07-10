var x =10 //Global Variable
function add1() {
    document.write(20+x+"<br>") //Adds 20 to x and starts a new line
}

function add2() {
    document.write(x+100+"<br>")//Adds 100 to x and starts a new line
}

add1();//calls function
add2();//calls function

function add3() {//local variable
    x=20
    document.write(20+x+"<br>")//Adds 20 to x and starts a new line
}
}

function add4() {//local variable
    x=30
    document.write(x+100)//Adds 100 to x 
}
}

add3();//calls function
add4();//calls function

function get_Date() {//if statement if it is before 8pm on any given day replies how are you today
    if(new Date().getHours()<20){
    document.getElementById("Greeting") .innerHTML = "How are you today?"
    }
}

function fail() {//invalid function to utilize console log
    console.log(x+z)
}

fail();//calls function

function Time_function() {//Gets the time and then tells user what time of day is when they click on button
    var Time = new Date().getHours();
    var Reply;
    if (Time<12 == Time > 0){
        Reply = "It's Morning";
    }
    else if (Time >= 12 == Time < 18) {
    
    Reply = "It's Afternoon";
    }
    else {
        Reply = "It's evening time";
    }
    document.getElementById("Time_of_day").innerHTML= Reply;
}