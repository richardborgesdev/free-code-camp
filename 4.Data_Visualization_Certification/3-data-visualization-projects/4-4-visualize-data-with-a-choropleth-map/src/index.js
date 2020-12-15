/*
  User Story #3: My choropleth should have counties with a corresponding
  class="county" that represent the data.

  User Story #4: There should be at least 4 different fill colors
  used for the counties.

  User Story #5: My counties should each have data-fips and
  data-education properties containing their corresponding fips and education values.

  User Story #6: My choropleth should have a county for each
  provided data point.

  User Story #7: The counties should have data-fips and
  data-education values that match the sample data.

  User Story #8: My choropleth should have a legend with
  a corresponding id="legend".

  User Story #9: There should be at least 4 different fill
  colors used for the legend.

  User Story #10: I can mouse over an area and see a tooltip
  with a corresponding id="tooltip" which displays more information about the area.

  User Story #11: My tooltip should have a data-education property
  that corresponds to the data-education of the active area.
*/

import * as d3 from "d3";

const buildVisualization = (educationData, countyData) => {
  console.log(educationData, countyData);
};

const buildVisualizationWithFccDataset = async () => {
  /*
    Here is the dataset you will need to complete this project:
    https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json

    example: https://codepen.io/freeCodeCamp/full/EZKqza
  */
  const educationResponse = await fetch(
    "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json"
  );
  const countyResponse = await fetch(
    "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json"
  );

  const educationData = await educationResponse.json();
  let countyData = await countyResponse.json();

  buildVisualization(educationData, countyData);
};

buildVisualizationWithFccDataset();
