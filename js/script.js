// INDEX PAGE

var i = 0;
var txt = 'Create Strong Passwords';
var speed = 120;

// function to auto-type text
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("title").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}