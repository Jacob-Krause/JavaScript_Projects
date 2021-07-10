//A function that will tell user if they are tall enough to go on ride
function Ride_Function() {
    var Height, Can_ride;
    Height= document.getElementById("Height").value;
    Can_ride = (Height<52)? "You are to short":"You are tall enough";
    document.getElementById("Ride").innerHTML=Can_ride+" to ride.";
}

//A function that creates a class for a vehicle
function vehicle(Make, Model, Year, Color) {
    this.vehicle_Make = Make;
    this.vehicle_Model = Model;
    this.vehicle_Year = Year;
    this.vehicle_Color = Color;
}
//Creating instances of new vehicles
var Jack = new vehicle ("Dodge", "Viper", 2020, "Red");
var Emily = new vehicle ("Jeep", "Trail Hawk", 2019, "White and Black");
var Eric = new vehicle ("Ford", "Pinto", 1971, "Mustard");

//displaying information on eric's car
function myFunction() {
    document.getElementById("Keyword_and_Constructors") .innerHTML =
    "Eric drives a " + Eric.vehicle_Color + "-colored " + Eric.vehicle_Model +
    " manufactred in " + Eric.vehicle_Year
}
//A nesting fuction that adds 1 to a stating number
function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point+=1;}
        Plus_one();
        return Starting_point;
    }
}