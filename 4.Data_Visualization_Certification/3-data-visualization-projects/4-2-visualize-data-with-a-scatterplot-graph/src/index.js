/*
  User Story #14: I can mouse over an area and see a tooltip with
  a corresponding id="tooltip" which displays more information about the area.

  User Story #15: My tooltip should have a data-year property
  that corresponds to the data-xvalue of the active area.
*/

import * as d3 from "d3";

const buildVisualization = (dataset) => {
  console.log(dataset);

  const margin = {
      top: 100,
      right: 20,
      bottom: 30,
      left: 60
    },
    width = 920 - margin.left - margin.right,
    height = 630 - margin.top - margin.bottom;

  const x = d3.scaleLinear().range([0, width]);
  const y = d3.scaleTime().range([0, height]);

  const timeFormat = d3.timeFormat("%M:%S");

  const xAxis = d3.axisBottom(x).tickFormat(d3.format("d"));
  /*
    User Story #9: I can see multiple tick labels on the y-axis
    with %M:%S time format.
  */
  const yAxis = d3.axisLeft(y).tickFormat(timeFormat);

  const color = d3.scaleOrdinal(d3.schemeCategory10);

  const svg = d3
    .select("body")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("transform", "translate(" + margin.left + "," + margin.top + " )");

  dataset.forEach(function (d) {
    d.Place = +d.Place;
    var parsedTime = d.Time.split(":");
    d.Time = new Date(Date.UTC(1970, 0, 1, 0, parsedTime[0], parsedTime[1]));
  });

  /*
    User Story #10: I can see multiple tick labels on the x-axis that show the year.

    User Story #11: I can see that the range of the x-axis labels are within
    the range of the actual x-axis data.
  */
  x.domain([
    d3.min(dataset, function (d) {
      return d.Year - 1;
    }),
    d3.max(dataset, function (d) {
      return d.Year + 1;
    })
  ]);

  /*
    User Story #12: I can see that the range of the y-axis labels are within
    the range of the actual y-axis data.
  */
  y.domain(
    d3.extent(dataset, function (d) {
      return d.Time;
    })
  );

  /*
    User Story #2: I can see an x-axis that has a corresponding id="x-axis".
  */
  svg
    .append("g")
    .attr("class", "x axis")
    .attr("id", "x-axis")
    .attr("transform", "translate(100," + height + ")")
    .call(xAxis)
    .append("text")
    .attr("class", "x-axis-label")
    .attr("x", width)
    .attr("y", -6)
    .style("text-anchor", "end")
    .text("Year");

  /*
    User Story #3: I can see a y-axis that has a corresponding id="y-axis".
  */
  svg
    .append("g")
    .attr("class", "y axis")
    .attr("id", "y-axis")
    .attr("transform", "translate(100, 0)")
    .call(yAxis)
    .append("text")
    .attr("class", "label")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("Best Time (minutes)");

  /*
    User Story #4: I can see dots, that each have a class of dot,
    which represent the data being plotted.
  */
  svg
    .selectAll(".dot")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("class", "dot")
    .attr("r", 6)
    /*
      User Story #5: Each dot should have the properties data-xvalue
      and data-yvalue containing their corresponding x and y values.

      User Story #7: The data-xvalue and its corresponding dot
      should align with the corresponding point/value on the x-axis.

      User Story #8: The data-yvalue and its corresponding dot
      should align with the corresponding point/value on the y-axis.
    */
    .attr("cx", function (d) {
      return x(d.Year);
    })
    .attr("cy", function (d) {
      return y(d.Time);
    })
    /*
      User Story #6: The data-xvalue and data-yvalue of each dot
      should be within the range of the actual data and in the correct data format.
      For data-xvalue, integers (full years) or Date objects are acceptable
      for test evaluation. For data-yvalue (minutes), use Date objects.
    */
    .attr("data-xvalue", function (d) {
      return d.Year;
    })
    .attr("data-yvalue", function (d) {
      return d.Time.toISOString();
    })
    .style("fill", function (d) {
      return color(d.Doping !== "");
    })
    .attr("transform", "translate(100, 0)");

  var legendContainer = svg.append("g").attr("id", "legend");

  /*
    User Story #13: I can see a legend containing descriptive text that
    has id="legend".
  */
  var legend = legendContainer
    .selectAll("#legend")
    .data(color.domain())
    .enter()
    .append("g")
    .attr("class", "legend-label")
    .attr("transform", function (d, i) {
      return "translate(0," + (height / 2 - i * 20) + ")";
    });

  legend
    .append("rect")
    .attr("x", width - 18)
    .attr("width", 18)
    .attr("height", 18)
    .style("fill", color);

  legend
    .append("text")
    .attr("x", width - 24)
    .attr("y", 9)
    .attr("dy", ".35em")
    .style("text-anchor", "end")
    .text(function (d) {
      if (d) {
        return "Riders with doping allegations";
      } else {
        return "No doping allegations";
      }
    });
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
