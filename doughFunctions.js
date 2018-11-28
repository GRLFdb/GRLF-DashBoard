// Menu Open
function openMenu() {
  document.getElementById("mySideMenu").style.width = "250px";
}

// Set width of side menu back to 0
function closeMenu() {
  document.getElementById("mySideMenu").style.width = "0";
}

// Patrick's time out code

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
};

// End code from Patrick

let Doughnut_B = document.getElementById('doughnutCanvas_B').getContext('2d');
let Doughnut_P = document.getElementById('doughnutCanvas_P').getContext('2d');
let Doughnut_DV = document.getElementById('doughnutCanvas_DV').getContext('2d');

let bassetData = [13.00, 4.00, 5.55, 7.26, 10.23, 8.21, 7.89, 6.63, 7.10, 3.58, 4.92];
let pioneerData = [1.99, 5.55, 2.15, 3.92, 8.14, 8.85, 3.25, 4.18, 3.18, 6.66, 7.51];

//declare the rgb values of red, green and blue in chart colors
window.chartColors = {
  basset: 'rgb(51, 102, 255)',
  pioneer: 'rgb(0, 255, 255)',
  dv: 'rgb(128, 255, 191)',
};

var myDoughnutChart_B = new Chart(Doughnut_B, {
  // The type of chart to create. Doughnut this case
  type: 'doughnut',

  // The data for our dataset
  data: {
    //our labels
    labels: ["I", "Finally","Got", "It", "To", "Work", "Cool", "Took", "Me", "Long", "Enough"],
    datasets: [
      //first (and only) dataset
      {
        //data values assigned in order of labels
        data: [13.00, 4.00, 5.55, 7.26, 10.23, 8.21, 7.89, 6.63, 7.10, 3.58, 4.92],
        //data colors assignedin order of labels
        backgroundColor: [
          window.chartColors.basset,
          window.chartColors.pioneer,
          window.chartColors.dv,
		  'red',
		  'blue',
		  'yellow',
		  'green',
		  'black',
		  'white',
		  'orange',
		  'purple',
        ],
        //Border and hover settings
        borderWidth: 1,
        borderColor: 'black',
        hoverBorderColor: 'rgb(242, 242, 242)',
        hoverBorderWidth: 2,
      }
      //end of data set
    ]
  },

  // Configuration options go here
  options: {
    //Allow it to change its size (in style.css)
    maintainAspectRatio: false,
    responsive: false,
    cutoutPercentage: 65,

    legend: {
      labels: {
        fontColor: '#cff',
      }
    }
  }
});

var myDoughnutChart_P = new Chart(Doughnut_P, {
  // The type of chart to create. Doughnut this case
  type: 'doughnut',

  // The data for our dataset
  data: {
    //our labels
    labels: ["Pioneer"],
    datasets: [
      //first (and only) dataset
      {
        //data values assigned in order of labels
        data: pioneerData,
        //data colors assignedin order of labels
        backgroundColor: [
          window.chartColors.basset,
          window.chartColors.pioneer,
          window.chartColors.dv,
		  'red',
		  'blue',
		  'yellow',
		  'green',
		  'black',
		  'white',
		  'orange',
		  'purple',
        ],
        //Border and hover settings
        borderWidth: 1,
        borderColor: 'black',
        hoverBorderColor: 'rgb(242, 242, 242)',
        hoverBorderWidth: 2,
      }
      //end of data set
    ]
  },

  // Configuration options go here
  options: {
    //Allow it to change its size (in style.css)
    maintainAspectRatio: false,
    responsive: false,
    cutoutPercentage: 65,

    legend: {
      labels: {
        fontColor: '#cff',
      }
    }
  }
});

var myDoughnutChart_DV = new Chart(Doughnut_DV, {
  // The type of chart to create. Doughnut this case
  type: 'doughnut',

  // The data for our dataset
  data: {
    //our labels
    labels: ["Dalton Voigt"],
    datasets: [
      //first (and only) dataset
      {
        //data values assigned in order of labels
        data: [1.00, 40.00, 15.5, 99.26, 10.3, 8.12, 2, 6.6, 7.10, 3.8, 4.92],
        //data colors assignedin order of labels
        backgroundColor: [
          window.chartColors.basset,
          window.chartColors.pioneer,
          window.chartColors.dv,
		  'red',
		  'blue',
		  'yellow',
		  'green',
		  'black',
		  'white',
		  'orange',
		  'purple',
        ],
        //Border and hover settings
        borderWidth: 1,
        borderColor: 'black',
        hoverBorderColor: 'rgb(242, 242, 242)',
        hoverBorderWidth: 2,
      }
      //end of data set
    ]
  },

  // Configuration options go here
  options: {
    //Allow it to change its size (in style.css)
    maintainAspectRatio: false,
    responsive: false,
    cutoutPercentage: 65,

    legend: {
      labels: {
        fontColor: '#cff',
      }
    }
  }
});