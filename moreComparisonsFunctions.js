/*Sums data passed in to display in table*/
function sumIt (buildingData) {
  var sum = 0;
  for(int i = 0; buildingData.length; i++){
    sum = sum + buildingData[i];
  }s
  return sum;
}

//JS allows overriding functions, but thsi one isn't working
//Not a big deal, but I'd like for it to allow the user to read the table for longer
//Should be the last version of the function listed, but referencing this file after the other didn't work
function startTimer() {
    // wait 30 seconds before calling goInactive()
    timeoutID = window.setTimeout(goBack, 30000);
}



/*Constants to generate units in table*/
document.querySelector('.whaleComparison').innerHTML = 36000 + " gallons";
document.querySelector('.poolComparison').innerHTML = 20000 + " gallons";
document.querySelector('.bathComparison').innerHTML = 80 + " gallons";
document.querySelector('.waterBottleComparison').innerHTML = 0.132 + " gallons";
document.querySelector('.dogComparison').innerHTML = 7.8 + " gallons";
document.querySelector('.waterbedComparison').innerHTML = 200 + " gallons";

//example of id selection:
document.getElementById('id').innerHTML = "Something";
