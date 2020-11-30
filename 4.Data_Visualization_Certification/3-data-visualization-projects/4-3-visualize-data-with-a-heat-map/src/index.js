/*
  User Story #2: My heat map should have a description with a corresponding
  id="description".

  User Story #8: The data-month, data-year of each cell should be within
  the range of the data.

  User Story #9: My heat map should have cells that align with the
  corresponding month on the y-axis.

  User Story #10: My heat map should have cells that align with the
  corresponding year on the x-axis.

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

  const svg = d3
    .select("body")
    .append("svg")
    .attr("width", width + padding.left + padding.right)
    .attr("height", height + padding.top + padding.bottom)
    .attr("transform", "translate(" + padding.left + "," + padding.top + " )");

  var yScale = d3
    .scaleBand()
    // months
    .domain([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
    .rangeRound([0, height], 0, 0);
  var yAxis = d3
    .axisLeft()
    .scale(yScale)
    /*
      User Story #11: My heat map should have multiple tick labels on the
      y-axis with the full month name.
    */
    .tickValues(yScale.domain())
    .tickFormat(function (month) {
      var date = new Date(0);
      date.setUTCMonth(month);
      return d3.utcFormat("%B")(date);
    })
    .tickSize(10, 1);
  svg
    .append("g")
    .classed("y-axis", true)
    /*
      User Story #4: My heat map should have a y-axis with a corresponding
      id="y-axis".
    */
    .attr("id", "y-axis")
    .attr("transform", "translate(" + padding.left + "," + padding.top + ")")
    .call(yAxis)
    .append("text")
    .text("Months")
    .style("text-anchor", "middle")
    .attr(
      "transform",
      "translate(" + -7 * fontSize + "," + height / 2 + ") + rotate(-90)"
    );

  var xScale = d3
    .scaleBand()
    .domain(
      dataset.monthlyVariance.map(function (val) {
        return val.year;
      })
    )
    .rangeRound([0, width], 0, 0);
  var xAxis = d3
    .axisBottom()
    .scale(xScale)
    /*
      User Story #12: My heat map should have multiple tick labels on the
      x-axis with the years between 1754 and 2015.
    */
    .tickValues(
      xScale.domain().filter(function (year) {
        // set ticks to years divisible by 10
        return year % 10 === 0;
      })
    )
    .tickFormat(function (year) {
      var date = new Date(0);
      date.setUTCFullYear(year);
      return d3.utcFormat("%Y")(date);
    })
    .tickSize(10, 1);
  svg
    .append("g")
    .classed("x-axis", true)
    /*
      User Story #3: My heat map should have an x-axis with a corresponding
      id="x-axis".
    */
    .attr("id", "x-axis")
    .attr(
      "transform",
      "translate(" + padding.left + "," + (height + padding.top) + ")"
    )
    .call(xAxis)
    .append("text")
    .text("Years")
    .style("text-anchor", "middle")
    .attr("transform", "translate(" + width / 2 + "," + 3 * fontSize + ")");

  /*
    User Story #6: There should be at least 4 different fill colors used
    for the cells.
  */
  var colorbrewer = {
    RdYlBu: {
      3: ["#fc8d59", "#ffffbf", "#91bfdb"],
      4: ["#d7191c", "#fdae61", "#abd9e9", "#2c7bb6"],
      5: ["#d7191c", "#fdae61", "#ffffbf", "#abd9e9", "#2c7bb6"],
      6: ["#d73027", "#fc8d59", "#fee090", "#e0f3f8", "#91bfdb", "#4575b4"],
      7: [
        "#d73027",
        "#fc8d59",
        "#fee090",
        "#ffffbf",
        "#e0f3f8",
        "#91bfdb",
        "#4575b4"
      ],
      8: [
        "#d73027",
        "#f46d43",
        "#fdae61",
        "#fee090",
        "#e0f3f8",
        "#abd9e9",
        "#74add1",
        "#4575b4"
      ],
      9: [
        "#d73027",
        "#f46d43",
        "#fdae61",
        "#fee090",
        "#ffffbf",
        "#e0f3f8",
        "#abd9e9",
        "#74add1",
        "#4575b4"
      ],
      10: [
        "#a50026",
        "#d73027",
        "#f46d43",
        "#fdae61",
        "#fee090",
        "#e0f3f8",
        "#abd9e9",
        "#74add1",
        "#4575b4",
        "#313695"
      ],
      11: [
        "#a50026",
        "#d73027",
        "#f46d43",
        "#fdae61",
        "#fee090",
        "#ffffbf",
        "#e0f3f8",
        "#abd9e9",
        "#74add1",
        "#4575b4",
        "#313695"
      ]
    },
    RdBu: {
      3: ["#ef8a62", "#f7f7f7", "#67a9cf"],
      4: ["#ca0020", "#f4a582", "#92c5de", "#0571b0"],
      5: ["#ca0020", "#f4a582", "#f7f7f7", "#92c5de", "#0571b0"],
      6: ["#b2182b", "#ef8a62", "#fddbc7", "#d1e5f0", "#67a9cf", "#2166ac"],
      7: [
        "#b2182b",
        "#ef8a62",
        "#fddbc7",
        "#f7f7f7",
        "#d1e5f0",
        "#67a9cf",
        "#2166ac"
      ],
      8: [
        "#b2182b",
        "#d6604d",
        "#f4a582",
        "#fddbc7",
        "#d1e5f0",
        "#92c5de",
        "#4393c3",
        "#2166ac"
      ],
      9: [
        "#b2182b",
        "#d6604d",
        "#f4a582",
        "#fddbc7",
        "#f7f7f7",
        "#d1e5f0",
        "#92c5de",
        "#4393c3",
        "#2166ac"
      ],
      10: [
        "#67001f",
        "#b2182b",
        "#d6604d",
        "#f4a582",
        "#fddbc7",
        "#d1e5f0",
        "#92c5de",
        "#4393c3",
        "#2166ac",
        "#053061"
      ],
      11: [
        "#67001f",
        "#b2182b",
        "#d6604d",
        "#f4a582",
        "#fddbc7",
        "#f7f7f7",
        "#d1e5f0",
        "#92c5de",
        "#4393c3",
        "#2166ac",
        "#053061"
      ]
    }
  };
  var legendColors = colorbrewer.RdYlBu[11].reverse();
  var variance = dataset.monthlyVariance.map(function (val) {
    return val.variance;
  });
  var minTemp = dataset.baseTemperature + Math.min.apply(null, variance);
  var maxTemp = dataset.baseTemperature + Math.max.apply(null, variance);
  var legendThreshold = d3
    .scaleThreshold()
    .domain(
      (function (min, max, count) {
        var array = [];
        var step = (max - min) / count;
        var base = min;
        for (var i = 1; i < count; i++) {
          array.push(base + i * step);
        }
        return array;
      })(minTemp, maxTemp, legendColors.length)
    )
    .range(legendColors);

  svg
    .append("g")
    .classed("map", true)
    .attr("transform", "translate(" + padding.left + "," + padding.top + ")")
    .selectAll("rect")
    .data(dataset.monthlyVariance)
    .enter()
    .append("rect")
    /*
      User Story #5: My heat map should have rect elements with a class="cell"
      that represent the data.
    */

    .attr("class", "cell")
    /*
      User Story #7: Each cell will have the properties data-month, data-year,
      data-temp containing their corresponding month, year, and temperature values.
    */
    .attr("data-month", function (d) {
      return d.month;
    })
    .attr("data-year", function (d) {
      return d.year;
    })
    .attr("data-temp", function (d) {
      return dataset.baseTemperature + d.variance;
    })
    .attr("x", function (d) {
      return xScale(d.year);
    })
    .attr("y", function (d) {
      return yScale(d.month);
    })
    .attr("width", xScale.bandwidth())
    .attr("height", yScale.bandwidth())
    .style("fill", function (d) {
      legendThreshold(dataset.baseTemperature + d.variance);
    });
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
