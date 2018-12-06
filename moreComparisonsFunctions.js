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


function updateTable() {
/*Constants to generate units in table*/
document.getElementById('whaleComparison').innerHTML = "36000 Gallons";
document.getElementById("poolComparison").innerHTML = 20000 + " Gallons";
document.getElementById("bathComparison").innerHTML = 80 + " Gallons";
document.getElementById("waterBottleComparison").innerHTML = 0.132 + " Gallons";
document.getElementById("dogComparison").innerHTML = 7.8 + " Gallons";
document.getElementById("waterbedComparison").innerHTML = 200 + " Gallons";
}
