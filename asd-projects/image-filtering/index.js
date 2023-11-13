// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here

  applyFilter(reddify);
  applyFilterNoBackground(decreaseBlue);
  applyFilterNoBackground(increaseGreenByBlue);
  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (let c = 0; c < image.length; c++) {
    let row = image[c];
    for (let d = 0; d < row.length; d++) {
      let rgbString = row[d];
      let rgbNumbers = rgbStringToArray(rgbString)
      filterFunction(rgbNumbers)
      rgbString = rgbArrayToString(rgbNumbers)
      row[d] = rgbString
    }
  }
}

// TODO 7: Create the applyFilterNoBackground function

function applyFilterNoBackground(filterFunction){
  let backgroundColor = image[0][0]; 
  for (let c = 0; c < image.length; c++) {
    let row = image[c];
    for (let d = 0; d < row.length; d++) {
      let rgbString = row[d];
      if (backgroundColor != rgbString){
      let rgbNumbers = rgbStringToArray(rgbString)
      filterFunction(rgbNumbers)
      rgbString = rgbArrayToString(rgbNumbers)
      row[d] = rgbString
      }
    }
  }
}

// TODO 5: Create the keepInBounds function
function keepInBounds(area) {
  area = (area < 0 ? 0 : (area > 255 ? 255 : area))
  return area;
}


// TODO 3: Create reddify function
function reddify(z) {
  z[RED] = 200
}

// TODO 6: Create more filter functions
function decreaseBlue(par) {
  par[BLUE] = keepInBounds(par[BLUE] - 50);
}
function increaseGreenByBlue(anarray) {
  anarray[GREEN] = keepInBounds(anarray[BLUE] + anarray[GREEN]);
}



// CHALLENGE code goes below here

function smudge (pixel, smuged) {
  for (let c = 0; c < image.length; c++) {
    let row = image[c];
    for (let d = 0; d < row.length; d++) {
      let rgbString = row[d];

      let rgbNumbers = rgbStringToArray(rgbString); //change string to number
      filterFunction(rgbNumbers);
      rgbString = rgbArrayToString(rgbNumbers); 

      row[d] = rgbString;

    }
  }
}


