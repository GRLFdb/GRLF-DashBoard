/* Set width of side menu to 250px */
function openMenu() {
  if (document.getElementById("mySideMenu").style.width === "250px") {
    closeMenu();
  } else{
    document.getElementById("mySideMenu").style.width = "250px";
  }
}

/* Set width of side menu back to 0 */
function closeMenu() {
  document.getElementById("mySideMenu").style.width = "0";
}

/*Image slideshow*/
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var image = document.getElementsByClassName("mySlides");
  var text = document.getElementsByClassName("imageText")[0];
  changeImageText(slideIndex, text);
  for (i = 0; i < image.length; i++) {
    image[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > image.length) {slideIndex = 1}
  image[slideIndex-1].style.display = "block";
  setTimeout(carousel, 7000); // Change image every 2 seconds
}

function changeImageText(index, text) {
  switch (index%2) {
    case 0:
    text.innerHTML = '76877 gallons = 6 swimming pools'
    break;

    case 1:
    text.innerHTML = '76877 gallons = 1153155 bottles of water'
    break;

    default:
    break;
  }
}

/*Line Graph scripts*/
/*Get line canvas for line graph, then doughnut*/
let myChart = document.getElementById('myChart').getContext('2d');
let myDoughnut = document.getElementById('doughnutCanvas').getContext('2d');

//Global options
Chart.defaults.global.defaultFontFamily = 'Segoe UI';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultColor = 'rgb(0, 0, 102,1)'; //this changes the color of the inside of the legend logos

/* temporary data for demo, assuming we dont get csv files working */
let bassetData = [13.00, 4.00, 5.55, 7.26, 10.23, 8.21, 7.89, 6.63, 7.10, 3.58, 4.92];
let pioneerData = [1.99, 5.55, 2.15, 3.92, 8.14, 8.85, 3.25, 4.18, 3.18, 6.66, 7.51];

/* build line chart */
let lineChart = new Chart(myChart, {

  type:'line', // declares it a line chart
  data:{
    labels:['Oct. 1', 'Oct. 4', 'Oct. 7', 'Oct. 10', 'Oct. 13', 'Oct. 16', 'Oct. 19', 'Oct. 22', 'Oct. 25',
    'Oct. 28', 'Oct. 31'], // chose 10 3 day interval dates for demo; added Oct. 1 for starting point

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

var myDoughnutChart = new Chart(myDoughnut, {
  // The type of chart to create. Doughnut this case
  type: 'doughnut',

  // The data for our dataset
  data: {
    //our labels
    labels: ["Basset", "Pioneer", "Dalton Voigt"],
    datasets: [
      //first (and only) dataset
      {
        //data values assigned in order of labels
        data: [30, 45, 25],
        //data colors assignedin order of labels
        backgroundColor: [
          window.chartColors.basset,
          window.chartColors.pioneer,
          window.chartColors.dv,
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



// hopefully keeps the button that is being used as the one that is highlighted
// Get the container element
var btnContainer = document.getElementById("headingButton");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("graphButton");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}





// gets the current month
n =  new Date();
month = n.getMonth() + 1; // " + 1" included because January == 0



// calls changeDate fn with linechart and current month
changeDate(lineChart, month);

// changes the date labels on the line chart to the actual dates
function changeDate (chart, m){
  // goes through and checks which month it is and places the proper dates
  if (m == 1){
    chart.data.labels = ['Jan. 1', 'Jan. 4', 'Jan. 7', 'Jan. 10', 'Jan. 13',
    'Jan. 16', 'Jan. 19', 'Jan. 22', 'Jan. 25', 'Jan. 28', 'Jan. 31'];
  }else if (m == 2){ 
    chart.data.labels = ['Feb. 1', 'Feb. 3', 'Feb. 7', 'Feb. 10', 'Feb. 13',
    'Feb. 15', 'Feb. 19', 'Feb. 22', 'Feb. 24', 'Feb. 26', 'Feb. 28'];
  }else if (m == 3){
    chart.data.labels = ['Mar. 1', 'Mar. 4', 'Mar. 7', 'Mar. 10', 'Mar. 13',
    'Mar. 16', 'Mar. 19', 'Mar. 22', 'Mar. 25', 'Mar. 28', 'Mar. 31'];
  }else if (m == 4){
    chart.data.labels = ['Apr. 1', 'Apr. 4', 'Apr. 7', 'Apr. 10', 'Apr. 13',
    'Apr. 16', 'Apr. 19', 'Apr. 22', 'Apr. 25', 'Apr. 28', 'Apr. 30'];
  }else if (m == 5){
    chart.data.labels = ['May. 1', 'May. 4', 'May. 7', 'May. 10', 'May. 13',
    'May. 16', 'May. 19', 'May. 22', 'May. 25', 'May. 28', 'May. 31'];
  }else if (m == 6){
    chart.data.labels = ['June. 1', 'June. 4', 'June. 7', 'June. 10', 'June. 13',
    'June. 16', 'June. 19', 'June. 22', 'June. 25', 'June. 28', 'June. 30'];
  }else if (m == 7){
    chart.data.labels = ['July. 1', 'July. 4', 'July. 7', 'July. 10', 'July. 13',
    'July. 16', 'July. 19', 'July. 22', 'July. 25', 'July. 28', 'July. 31'];
  }else if (m == 8){
    chart.data.labels = ['Aug. 1', 'Aug. 4', 'Aug. 7', 'Aug. 10', 'Aug. 13',
    'Aug. 16', 'Aug. 19', 'Aug. 22', 'Aug. 25', 'Aug. 28', 'Aug. 31'];
  }else if (m == 9){
    chart.data.labels = ['Sep. 1', 'Sep. 4', 'Sep. 7', 'Sep. 10', 'Sep. 13',
    'Sep. 16', 'Sep. 19', 'Sep. 22', 'Sep. 25', 'Sep. 28', 'Sep. 30'];
  }else if (m == 10){
    chart.data.labels = ['Oct. 1', 'Oct. 4', 'Oct. 7', 'Oct. 10', 'Oct. 13',
    'Oct. 16', 'Oct. 19', 'Oct. 22', 'Oct. 25', 'Oct. 28', 'Oct. 31'];
  }else if (m == 11){
    chart.data.labels = ['Nov. 1', 'Nov. 4', 'Nov. 7', 'Nov. 10', 'Nov. 13',
    'Nov. 16', 'Nov. 19', 'Nov. 22', 'Nov. 25', 'Nov. 28', 'Nov. 30'];
  }else if (m == 12){
    chart.data.labels = ['Dec. 1', 'Dec. 4', 'Dec. 7', 'Dec. 10', 'Dec. 13',
    'Dec. 16', 'Dec. 19', 'Dec. 22', 'Dec. 25', 'Dec. 28', 'Dec. 31'];
  }
}


/* function below changes specific data point */
function changeData(chart, data, pointNum) {

  chart.data.datasets.forEach((dataset) => {
    dataset.data[pointNum] = data;
  });
  chart.update();
};

//changes visible data to basset data
function dataToBasset() {

  //Change label and title. Pick one ot use for demo
  lineChart.data.datasets[0].label = 'Basset';
  lineChart.options.title.text = 'Basset';
  for(i=0; i<bassetData.length; i++) {
    changeData(lineChart, bassetData[i], i)
  }
}

//changes visible data to pioneer data
function dataToPioneer() {

  lineChart.data.datasets[0].label = 'Pioneer';
  lineChart.options.title.text = 'Pioneer';
  for(i=0; i<pioneerData.length; i++) {
    changeData(lineChart, pioneerData[i], i)
  }
}

document.querySelector('.sumAbove').innerHTML = 19675+23656+33546 + " gallons";
