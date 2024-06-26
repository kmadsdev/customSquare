var input = document.getElementById("values");
var gradient = document.getElementById("gradientValues");
var box = document.getElementById("box");
var textBox = document.getElementById('textBox');
var colorPicker = document.querySelector('.colorPicker');


input.addEventListener("input", function() {
    var vls = input.value;
    if (vls == "") { reset(); }
    vls = input.value.split(";");

    box.style.background = vls[0];
    box.style.backgroundColor = vls[0];
    box.style.borderRadius = vls[1];
    box.style.borderColor = vls[2];
    box.style.borderWidth = vls[3];
    box.style.height = vls[4];
    box.style.width = vls[5];

    console.log("vls: " + vls + "\nLenght: " + vls.length);
});


gradient.addEventListener("input", function() {
    var vls = gradient.value;
    if (vls == "") { reset(); }
    vls = gradient.value.split(";");

    setGradient(vls);

    console.log("gvls: " + vls + "\nLenght: " + vls.length);
});


document.addEventListener("DOMContentLoaded", function() {
    colorPicker.addEventListener("input", function() {
        textBox.textContent = "Color: " + colorPicker.value;
    });
});


function setGradient(vls) {
    const colors = vls.slice(0, 8);
    box.style.background = `linear-gradient(${colors.join(', ')})`;
}


function reset () {
    box.style.borderRadius = '5px';
    box.style.borderColor = 'black';
    box.style.height = '500px';
    box.style.width = '500px';
    box.style.borderWidth = '2px';
    box.style.background = 'white';
    input.textContent = "";
};


function setColor () {
    box.style.backgroundColor = colorPicker.value;
};
