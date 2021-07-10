function full_sentence() {//takes multiple variables and puts them all together
    var part_1="I made ";
    var part_2=" this into";
    var part_3=" a sentence.";
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("Concatenate").innerHTML= whole_sentence;
}

function slice_method() {// takes specific part of variable and displays that part
    var sentence = "All work and no play makes Johnny a dull boy.";
    var section = sentence.slice(27,33);
    document.getElementById("Slice") .innerHTML = section;
}

function string_method() {//converts numbers into string text
    var x = 182;
    document.getElementById("Numbers_to_string").innerHTML = x.toString();
}

function precision_method() {//takes large number variables and reduces them to 10 didgits
    var x = 12938.1222154512554236;
    document.getElementById("Precision").innerHTML = x.toPrecision(10);
}