function vehicle(Make, Model, Year, Color) {
    this.vehicle_Make = Make;
    this.vehicle_Model = Model;
    this.vehicle_Year = Year;
    this.vehicle_Color = Color;
}
var Jack = new vehicle ("Dodge", "Viper", 2020, "Red");
var Emily = new vehicle ("Jeep", "Trail Hawk", 2019, "White and Black");
var Eric = new vehicle ("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keyword_and_Constructors") .innerHTML =
    "Eric drives a " + Eric.vehicle_Color + "-colored " + Eric.vehicle_Model +
    " manufactred in " + Eric.vehicle_Year
}