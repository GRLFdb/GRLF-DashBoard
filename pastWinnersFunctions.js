// opens menu
function openMenu() {
  document.getElementById("mySideMenu").style.width = "250px";
}

// Set width of side menu back to 0
function closeMenu() {
  document.getElementById("mySideMenu").style.width = "0";
}


//////////
// Function to return to home page after inactivity
//////////

var timeoutID;

// sets up list of things that will reset the timer and also calls startTimer() to begin the timer
function setup() {
    this.addEventListener("mousemove", resetTimer, false);
    this.addEventListener("mousedown", resetTimer, false);
    this.addEventListener("keypress", resetTimer, false);
    this.addEventListener("DOMMouseScroll", resetTimer, false);
    this.addEventListener("mousewheel", resetTimer, false);
    this.addEventListener("touchmove", resetTimer, false);
    this.addEventListener("MSPointerMove", resetTimer, false);

    startTimer();
}

setup();

// starts the timer
function startTimer() {
    // wait 2 seconds before calling goInactive()
    timeoutID = window.setTimeout(goBack, 10000);
}


// once any ony of the actions in the setup() function take place, this function is called
// negates the setTimeout call from startTimer() and starts the timer again by calling goActive()
function resetTimer(e) {
    window.clearTimeout(timeoutID);

    goActive();

}

// sets up a function to go back to previous page
function goBack() {
  window.location.href = "index.html";
}

// returns to homepage after set length of inactivity by calling goBack() function; will need to change in order to specify homepage
/*function goInactive() {
  goBack();

}*/

// resets timer after going active again
function goActive() {

    startTimer();
}
