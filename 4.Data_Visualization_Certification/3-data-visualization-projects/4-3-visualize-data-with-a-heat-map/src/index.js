/*
  User Story #2: My heat map should have a description with a corresponding
  id="description".

  User Story #3: My heat map should have an x-axis with a corresponding
  id="x-axis".

  User Story #5: My heat map should have rect elements with a class="cell"
  that represent the data.

  User Story #6: There should be at least 4 different fill colors used
  for the cells.

  User Story #7: Each cell will have the properties data-month, data-year,
  data-temp containing their corresponding month, year, and temperature values.

  User Story #8: The data-month, data-year of each cell should be within
  the range of the data.

  User Story #9: My heat map should have cells that align with the
  corresponding month on the y-axis.

  User Story #10: My heat map should have cells that align with the
  corresponding year on the x-axis.

  User Story #11: My heat map should have multiple tick labels on the
  y-axis with the full month name.

  User Story #12: My heat map should have multiple tick labels on the
  x-axis with the years between 1754 and 2015.

  User Story #13: My heat map should have a legend with a corresponding
  id="legend".

  User Story #14: My legend should contain rect elements.

  User Story #15: The rect elements in the legend should use at least
  4 different fill colors.

  User Story #16: I can mouse over an area and see a tooltip with a
  corresponding id="tooltip" which displays more information about the area.

  User Story #17: My tooltip should have a data-year property that
  corresponds to the data-year of the active area.
*/

import * as d3 from "d3";

const buildVisualization = (dataset) => {
  console.log(dataset);

  var section = d3.select("body").append("section");
  var fontSize = 16;
  var width = 5 * Math.ceil(dataset.monthlyVariance.length / 12);
  var height = 33 * 12;
  var padding = {
    left: 9 * fontSize,
    right: 9 * fontSize,
    top: 1 * fontSize,
    bottom: 8 * fontSize
  };

  var svg = section.append("svg").attr({
    width: width + padding.left + padding.right,
    height: height + padding.top + padding.bottom
  });

  var yScale = d3
    .scaleBand()
    // months
    .domain([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
    .rangeRound([0, height], 0, 0);

  /*
    User Story #4: My heat map should have a y-axis with a corresponding
    id="y-axis".
  */
};

const buildVisualizationWithFccDataset = async () => {
  /*
    Here is the dataset you will need to complete this project:
    https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json

    example: https://codepen.io/freeCodeCamp/full/JEXgeY
  */
  const response = await fetch(
    "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json"
  );

  let fccDataset = await response.json();
  buildVisualization(fccDataset);
};

buildVisualizationWithFccDataset();
