// Exercice 1

function knockKnock() {
    document.getElementById('mysteriousDoor').src="assets/img/johnny's-here.png";
}
function nobodyKnocking(){
    document.getElementById('mysteriousDoor').src="assets/img/door.png";
}

// Exercice 2

function displayText() {
    var displayText = document.getElementById('whatever').value;
    alert(displayText);
}

// Exercice 3

function soDramatic() {
    var img = document.getElementById('dramaticBeaver');
    var imgWidth = window.getComputedStyle(img).getPropertyValue('width');
    var valueWidth = imgWidth.split('p', 1);
    var integerValue = Number(valueWidth) + 50;
    var finalValue = integerValue + 'px';
    var finalValueString = String(finalValue);
    img.style.width = finalValueString;
}