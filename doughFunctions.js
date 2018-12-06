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

let bassetData = [13.00, 4.00, 5.55, 7.26];
let pioneerData = [1.99, 5.55, 2.15, 3.92];
let DVData = [1.00, 40.00, 15.5, 99.26];
let standardLabels = ["Floor 1", "Floor 2", "Floor 3", "Floor 4"]

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
    labels: standardLabels,
    datasets: [
      //first (and only) dataset
      {
        //data values assigned in order of labels
        data: bassetData,
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
    labels: standardLabels,
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
    labels: standardLabels,
    datasets: [
      //first (and only) dataset
      {
        //data values assigned in order of labels
        data: DVData,
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

/*
let bassetSum = 0;
let pioneerSum = 0;
let dvSum = 0;
setInterval(dataStep, 10000);

function dataStep() {
  for (i=0; i<bassetData.length-1; i++){
    bassetData[i] = bassetData[i+1];
  }
  bassetData[bassetData.length-1] = 2 + (Math.round(Math.random()*1400)/100);

  for (i=0; i<pioneerData.length-1; i++){
    pioneerData[i] = pioneerData[i+1];
  }
  pioneerData[pioneerData.length-1] = 2 + (Math.round(Math.random()*1500)/100);

  for (i=0; i<DVData.length-1; i++){
    DVData[i] = DVData[i+1];
  }
  DVData[DVData.length-1] = 2 + (Math.round(Math.random()*1700)/100);
  updateDoughnut();
}

function updateDoughnut(){
  bassetSum = 0;
  pioneerSum = 0;
  dvSum = 0;
  for (i=0; i<bassetData.length; i++){
    bassetSum += bassetData[i];
  }
  for (i=0; i<pioneerData.length; i++){
    pioneerSum += pioneerData[i];
  }
  for (i=0; i<DVData.length; i++){
    dvSum += DVData[i];
  }

  myDoughnutChart_P.data.datasets.forEach((dataset) => {
    dataset.data[0] = bassetSum;
    dataset.data[1] = pioneerSum;
	dataset.data[2] = dvSum;
  })
  myDoughnutChart_B.data.datasets.forEach((dataset) => {
    dataset.data[0] = bassetSum;
    dataset.data[1] = pioneerSum;
	dataset.data[2] = dvSum;
  })
  myDoughnutChart_DV.data.datasets.forEach((dataset) => {
    dataset.data[0] = bassetSum;
    dataset.data[1] = pioneerSum;
	dataset.data[2] = dvSum;
  })
  myDoughnutChart_P.update();
  myDoughnutChart_B.update();
  myDoughnutChart_DV.update();
}
*/