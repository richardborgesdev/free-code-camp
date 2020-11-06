import * as d3 from "d3";

const buildVisualization = (dataset) => {
  console.log(dataset);

  const padding = 60,
    w = 800,
    h = 400,
    barWidth = w / dataset.length;

  const svg = d3
    .select("body")
    .append("svg")
    .attr("width", w + 100)
    .attr("height", h + padding);
};

const buildVisualizationWithFccDataset = async () => {
  /*
    Here is the dataset you will need to complete this project:
    https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json

    example: https://codepen.io/freeCodeCamp/full/bgpXyK
  */
  const response = await fetch(
    "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json"
  );

  let fccDataset = await response.json();
  buildVisualization(fccDataset);
};

buildVisualizationWithFccDataset();
