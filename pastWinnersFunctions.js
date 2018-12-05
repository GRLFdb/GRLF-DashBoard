// opens menu
function openMenu() {
  document.getElementById("mySideMenu").style.width = "250px";
}

// function to display the graph each month when the table element is clicked
// function openGraph(monthForGraph){}

// Set width of side menu back to 0
function closeMenu() {
  document.getElementById("mySideMenu").style.width = "0";
}



function openPioneer(month) {
  document.getElementById("pioneerSlideID").style.width = "1920px";
  document.getElementById("pioHeading").innerHTML = "Pioneer: " + month;

  /*Get line canvas for line graph*/
  let pioneerChart = document.getElementById('pioneerChart').getContext('2d');


  //Global options
  Chart.defaults.global.defaultFontFamily = 'Segoe UI';
  Chart.defaults.global.defaultFontSize = 18;
  Chart.defaults.global.defaultColor = 'rgb(0, 0, 102,1)'; //this changes the color of the inside of the legend logos



  /* build line chart */
  let pioneerLineChart = new Chart(pioneerChart, {

    type:'line', // declares it a line chart
    data:{
      labels:['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9',
      'Day 10', 'Day 11'], // chose 10 3 day interval dates for demo; added Oct. 1 for starting point

      datasets:[
        {
          label:'Pioneer',
          data:[
            1.00,
            3.98,
            4.32,
            4.67,
            5.70,
            5.99,
            6.54,
            7.01,
            7.85,
            8.78,
            12.20
          ],
          fill:false,
          borderColor:'rgb(0, 204, 204)', // sets color of this line to dark grey
          backgroundColor: 'rgba(102, 255, 255, 1)', // background color of fill lines
          pointBackgroundColor:'rgb(169, 169, 169, 0.9)', // gets rid of the backgroundColor pixel in the center of the point
          borderWidth:5,
          hoverBorderWidth:3,
          hoverBorderColor:'#000',
        },
      ],
    },

    options:{

      maintainAspectRatio: true,
      responsive: true,

      title:{
        display:false, // set to false because it will hopefully be evident, but can change
        text:'BUILDING NAME',
        fontColor: '#cff',
        fontSize:25,
      },

      legend:{
        display: false,
        position:'top',  // can do top, bottom, left, right
        cursor: 'pointer',
        padding:{
          left:100, // don't know if this actually affected it
        },

        labels:{
          fontColor:'#cff',
          fontStyle:'bold',
        },
      },

      layout:{
        padding:{ // all values to 0 so this doesn't change anything
        left:0,
        right:0,
        bottom:0,
        top:0,
      },
    },

    scales:{

      xAxes: [{
        ticks:{
          fontColor: '#cff',
          max:'Oct. 31', // sets max of y axis to 16 - consider using suggestedMax when actual data comes
          min:'Oct. 1', // sets min of x axis to 0
        },

        gridLines:{
          color:'#cff',
          lineWidth:3, // changes width of x axis gridline on the side
          display:false, // gets rid of x axis gridlines
          //color: "rgba(0, 0, 0, 0)",  from when I didn't know display:false was a thing
        },
      }],

      yAxes: [{
        ticks:{
          fontColor: '#cff',
          max:16, // sets max of y axis to 16 - consider using suggestedMax when actual data comes
          min:0, // sets min of x axis to 0
        },

        gridLines:{
          color:'#cff',
          lineWidth:3, // changes width of y axis gridline on the side
          display:false, // gets rid of y axis gridlines
          //  color: "rgba(0, 0, 0, 0)",  from when I didn't know display:false was a thing
        },

        scaleLabel:{
          display:true, // will display title of y axis
          labelString:'Water Usage (1000s of gallons)', // title that is displayed
          fontColor: '#cff',
          fontStyle:'bold',
          padding:{
            bottom:10, // adds a little space between axis and title
          },
        },
      }],
    },
  },
  });

  //declare the rgb values of red, green and blue in chart colors
  window.chartColors = {
    basset: 'rgb(51, 102, 255)',
    pioneer: 'rgb(0, 255, 255)',
    dv: 'rgb(128, 255, 191)',
  };

}



function closePioneer() {
  document.getElementById("pioneerSlideID").style.width = "0";
}

function openBasset(month) {
  document.getElementById("bassetSlideID").style.width = "1920px";
  document.getElementById("basHeading").innerHTML = "Bassett: " + month;

  /*Get line canvas for line graph*/
  let bassetChart = document.getElementById('bassetChart').getContext('2d');


  //Global options
  Chart.defaults.global.defaultFontFamily = 'Segoe UI';
  Chart.defaults.global.defaultFontSize = 18;
  Chart.defaults.global.defaultColor = 'rgb(0, 0, 102,1)'; //this changes the color of the inside of the legend logos



  /* build line chart */
  let bassetLineChart = new Chart(bassetChart, {

    type:'line', // declares it a line chart
    data:{
      labels:['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9',
      'Day 10', 'Day 11'], // chose 10 3 day interval dates for demo; added Oct. 1 for starting point

      datasets:[
        {
          label:'Bassett',
          data:[
            1.99,
            5.55,
            2.15,
            3.92,
            8.14,
            8.85,
            3.25,
            4.18,
            3.18,
            6.66,
            12.20
          ],
          fill:false,
          borderColor:'rgb(0, 204, 204)', // sets color of this line to dark grey
          backgroundColor: 'rgba(102, 255, 255, 1)', // background color of fill lines
          pointBackgroundColor:'rgb(169, 169, 169, 0.9)', // gets rid of the backgroundColor pixel in the center of the point
          borderWidth:5,
          hoverBorderWidth:3,
          hoverBorderColor:'#000',
        },
      ],
    },

    options:{

      maintainAspectRatio: true,
      responsive: true,

      title:{
        display:false, // set to false because it will hopefully be evident, but can change
        text:'BUILDING NAME',
        fontColor: '#cff',
        fontSize:25,
      },

      legend:{
        display: false,
        position:'top',  // can do top, bottom, left, right
        cursor: 'pointer',
        padding:{
          left:100, // don't know if this actually affected it
        },

        labels:{
          fontColor:'#cff',
          fontStyle:'bold',
        },
      },

      layout:{
        padding:{ // all values to 0 so this doesn't change anything
        left:0,
        right:0,
        bottom:0,
        top:0,
      },
    },

    scales:{

      xAxes: [{
        ticks:{
          fontColor: '#cff',
          max:'Oct. 31', // sets max of y axis to 16 - consider using suggestedMax when actual data comes
          min:'Oct. 1', // sets min of x axis to 0
        },

        gridLines:{
          color:'#cff',
          lineWidth:3, // changes width of x axis gridline on the side
          display:false, // gets rid of x axis gridlines
          //color: "rgba(0, 0, 0, 0)",  from when I didn't know display:false was a thing
        },
      }],

      yAxes: [{
        ticks:{
          fontColor: '#cff',
          max:16, // sets max of y axis to 16 - consider using suggestedMax when actual data comes
          min:0, // sets min of x axis to 0
        },

        gridLines:{
          color:'#cff',
          lineWidth:3, // changes width of y axis gridline on the side
          display:false, // gets rid of y axis gridlines
          //  color: "rgba(0, 0, 0, 0)",  from when I didn't know display:false was a thing
        },

        scaleLabel:{
          display:true, // will display title of y axis
          labelString:'Water Usage (1000s of gallons)', // title that is displayed
          fontColor: '#cff',
          fontStyle:'bold',
          padding:{
            bottom:10, // adds a little space between axis and title
          },
        },
      }],
    },
  },
  });

  //declare the rgb values of red, green and blue in chart colors
  window.chartColors = {
    basset: 'rgb(51, 102, 255)',
    pioneer: 'rgb(0, 255, 255)',
    dv: 'rgb(128, 255, 191)',
  };

}

function closeBasset() {
  document.getElementById("bassetSlideID").style.width = "0";
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

// returns to homepage after set length of inactivity by calling goBack() function
/*function goInactive() {
  goBack();

}*/

// resets timer after going active again
function goActive() {

    startTimer();
}
