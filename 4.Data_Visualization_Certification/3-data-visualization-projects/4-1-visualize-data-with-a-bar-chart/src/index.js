import * as d3 from "d3";

const buildVisualization = (dataset) => {
  console.log(dataset);

  const padding = 60;
  const w = dataset.length * 30 + padding + 15 + 75;
  const h = d3.max(dataset, (d) => d[1]);

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

  const divTooltip = d3
    .select("body")
    .append("div")
    .attr("id", "tooltip")
    .attr("class", "tooltip")
    .style("opacity", 0);

  svg
    .selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * 30 + padding + 15)
    .attr("y", (d, i) => h - d[1])
    .attr("width", 25)
    /*
      User Story #9: Each bar element's height should accurately represent the
      data's corresponding GDP.
    */
    .attr("height", (d, i) => d[1])
    /*
      User Story #5: My chart should have a rect element for each data point with
      a corresponding class="bar" displaying the data.
    */
    .attr("class", "bar")
    /*
      User Story #6: Each bar should have the properties data-date and data-gdp
      containing date and GDP values.

      User Story #7: The bar elements' data-date properties should match the order
      of the provided data.
    */
    .attr("data-date", (d) => d[0])
    /*
      User Story #8: The bar elements' data-gdp properties should match the order
      of the provided data.
    */
    .attr("data-gdp", (d) => d[1])
    /*
      User Story #12: I can mouse over an area and see a tooltip with a
      corresponding id="tooltip" which displays more information about the area.

      User Story #13: My tooltip should have a data-date property that
      corresponds to the data-date of the active area.
    */
    .on("mouseover", function (event, d) {
      divTooltip.transition().duration(100).style("opacity", 0.9);
      console.log(event);
      divTooltip
        .attr("data-date", d[0])
        .html(d[0] + " - " + d[1])
        .style("left", event.x + "px")
        .style("top", h - d[1] + "px");
    })
    .on("mouseout", function (d) {
      divTooltip.transition().duration(500).style("opacity", 0);
    });

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
    User Story #10: The data-date attribute and its corresponding bar element
    should align with the corresponding value on the x-axis.

    User Story #11: The data-gdp attribute and its corresponding bar element
    should align with the corresponding value on the y-axis.
  */
};

const buildVisualizationWithFccDataset = async () => {
  /*
    Here is the dataset you will need to complete this project:
    https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json

    example: https://codepen.io/freeCodeCamp/pen/GrZVaM
  */
  const response = await fetch(
    "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json"
  );
  let fccDataset = await response.json();
  console.log(fccDataset);
  buildVisualization(fccDataset.data);
};

buildVisualizationWithFccDataset();
