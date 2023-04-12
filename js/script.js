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

// open and close the consent form
function openConsent() {
    document.getElementById("consentForm").style.display = "block";
}

function closeConsent() {
    document.getElementById("consentForm").style.display = "none";
}

function showPopup() {
    document.getElementById("popup-text").style.display = "block";
}