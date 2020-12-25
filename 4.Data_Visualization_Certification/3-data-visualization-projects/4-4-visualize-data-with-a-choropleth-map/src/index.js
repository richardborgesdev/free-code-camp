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
import * as topojson from "topojson";

const buildVisualization = (educationData, countyData) => {
  //console.log(educationData, countyData);

  // Define body
  var body = d3.select("body");

  //var svg = d3.select("svg");

  const padding = 60,
    w = 1000,
    h = 700;
  const svg = d3
    .select("body")
    .append("svg")
    .attr("width", w + 100)
    .attr("height", h + padding);

  // Define the div for the tooltip
  var tooltip = body
    .append("div")
    .attr("class", "tooltip")
    .attr("id", "tooltip")
    .style("opacity", 0);

  var path = d3.geoPath();

  var x = d3.scaleLinear().domain([2.6, 75.1]).rangeRound([600, 860]);

  var color = d3
    .scaleThreshold()
    .domain(d3.range(2.6, 75.1, (75.1 - 2.6) / 8))
    .range(d3.schemeGreens[9]);

  var g = svg
    .append("g")
    .attr("class", "key")
    .attr("id", "legend")
    .attr("transform", "translate(0,40)");

  g.selectAll("rect")
    .data(
      color.range().map(function (d) {
        d = color.invertExtent(d);
        if (d[0] === null) {
          d[0] = x.domain()[0];
        }
        if (d[1] === null) {
          d[1] = x.domain()[1];
        }
        return d;
      })
    )
    .enter()
    .append("rect")
    .attr("height", 8)
    .attr("x", function (d) {
      return x(d[0]);
    })
    .attr("width", function (d) {
      return x(d[1]) - x(d[0]);
    })
    .attr("fill", function (d) {
      return color(d[0]);
    });

  g.append("text")
    .attr("class", "caption")
    .attr("x", x.range()[0])
    .attr("y", -6)
    .attr("fill", "#000")
    .attr("text-anchor", "start")
    .attr("font-weight", "bold");

  g.call(
    d3
      .axisBottom(x)
      .tickSize(13)
      .tickFormat(function (x) {
        return Math.round(x) + "%";
      })
      .tickValues(color.domain())
  )
    .select(".domain")
    .remove();

  svg
    .append("g")
    .attr("class", "counties")
    .selectAll("path")
    .data(topojson.feature(countyData, countyData.objects.counties).features)
    .enter()
    .append("path")
    .attr("class", "county")
    .attr("data-fips", function (d) {
      return d.id;
    })
    .attr("data-education", function (d) {
      var result = educationData.filter(function (obj) {
        return obj.fips === d.id;
      });
      if (result[0]) {
        return result[0].bachelorsOrHigher;
      }
      // could not find a matching fips id in the data
      console.log("could find data for: ", d.id);
      return 0;
    })
    .attr("fill", function (d) {
      var result = educationData.filter(function (obj) {
        return obj.fips === d.id;
      });
      if (result[0]) {
        return color(result[0].bachelorsOrHigher);
      }
      // could not find a matching fips id in the data
      return color(0);
    })
    .attr("d", path)
    .on("mouseover", function (e, d) {
      tooltip.style("opacity", 0.9);
      tooltip
        .html(function () {
          var result = educationData.filter(function (obj) {
            return obj.fips === d.id;
          });
          if (result[0]) {
            return (
              result[0]["area_name"] +
              ", " +
              result[0]["state"] +
              ": " +
              result[0].bachelorsOrHigher +
              "%"
            );
          }
          // could not find a matching fips id in the data
          return 0;
        })
        .attr("data-education", function () {
          var result = educationData.filter(function (obj) {
            return obj.fips === d.id;
          });
          if (result[0]) {
            return result[0].bachelorsOrHigher;
          }
          // could not find a matching fips id in the data
          return 0;
        })
        .style("left", e.screenX + 10 + "px")
        .style("top", e.screenY - 28 + "px");
    })
    .on("mouseout", function () {
      tooltip.style("opacity", 0);
    });

  svg
    .append("path")
    .datum(
      topojson.mesh(countyData, countyData.objects.states, function (a, b) {
        return a !== b;
      })
    )
    .attr("class", "states")
    .attr("d", path);
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
  const countyData = await countyResponse.json();

  buildVisualization(educationData, countyData);
};

buildVisualizationWithFccDataset();
