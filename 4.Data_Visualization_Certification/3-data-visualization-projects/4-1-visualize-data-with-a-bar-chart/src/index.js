import * as d3 from "d3";

const buildVisualization = (dataset) => {
  console.log(dataset);

  const w = dataset.length * 8;
  const h = 500;
  const padding = 60;

  const xScale = d3
    .scaleLinear()
    .domain([0, dataset.length])
    .range([padding, w - padding]);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(dataset, (d) => d[1])])
    .range([h - padding, padding]);

  const svg = d3
    .select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

  svg
    .selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * 30 + padding + 15)
    .attr("y", (d, i) => d[1] - padding)
    .attr("width", 25)
    .attr("height", (d, i) => yScale(d[1]));
  /*
  svg
    .selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx", (d) => xScale(d[0]))
    .attr("cy", (d) => yScale(d[1]))
    .attr("r", (d) => 5);

  svg
    .selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text((d) => d[0] + "," + d[1])
    .attr("x", (d) => xScale(d[0] + 10))
    .attr("y", (d) => yScale(d[1]));
*/
  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);

  /*
    User Story #2: My chart should have a g element x-axis with a corresponding
    id="x-axis".
  */
  svg
    .append("g")
    .attr("id", "x-axis")
    /*
      User Story #4: Both axes should contain multiple tick labels, each with the
      corresponding class="tick".
    */
    .attr("transform", "translate(0," + (h - padding) + ")")
    .call(xAxis);

  /*
    User Story #3: My chart should have a g element y-axis with a corresponding
    id="y-axis".
  */
  svg
    .append("g")
    .attr("id", "y-axis")
    /*
        User Story #4: Both axes should contain multiple tick labels, each with the
        corresponding class="tick".
      */
    .attr("transform", "translate(" + padding + ", 0)")
    .call(yAxis);

  /*
    User Story #5: My chart should have a rect element for each data point with
    a corresponding class="bar" displaying the data.

    User Story #6: Each bar should have the properties data-date and data-gdp
    containing date and GDP values.

    User Story #7: The bar elements' data-date properties should match the order
    of the provided data.

    User Story #8: The bar elements' data-gdp properties should match the order
    of the provided data.

    User Story #9: Each bar element's height should accurately represent the
    data's corresponding GDP.

    User Story #10: The data-date attribute and its corresponding bar element
    should align with the corresponding value on the x-axis.

    User Story #11: The data-gdp attribute and its corresponding bar element
    should align with the corresponding value on the y-axis.

    User Story #12: I can mouse over an area and see a tooltip with a
    corresponding id="tooltip" which displays more information about the area.

    User Story #13: My tooltip should have a data-date property that
    corresponds to the data-date of the active area.


  */
};

const buildVisualizationWithFccDataset = async () => {
  /*
    Here is the dataset you will need to complete this project:
    https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json
  */
  const response = await fetch(
    "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json"
  );
  let fccDataset = await response.json();
  console.log(fccDataset);
  buildVisualization(fccDataset.data);
};

buildVisualizationWithFccDataset();
