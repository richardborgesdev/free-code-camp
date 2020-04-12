# Data Visualization Certification
## [Data Visualization with D3](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/)

1. [Add Document Elements with D3](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/add-document-elements-with-d3)
    ```html
    <body>
        <script>
        // Add your code below this line
        d3.select('body')
        .append('h1')
        .text('Learning D3');
        // Add your code above this line
        </script>
    </body>
    ```
1. [Select a Group of Elements with D3](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/select-a-group-of-elements-with-d3)
    ```html
    <body>
        <ul>
            <li>Example</li>
            <li>Example</li>
            <li>Example</li>
        </ul>
        <script>
        // Add your code below this line
        d3.selectAll('li')
            .text('list item');
        // Add your code above this line
        </script>
    </body>
    ```
1. [Work with Data in D3](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/work-with-data-in-d3)
    ```html
    <body>
        <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
        // Add your code below this line
        d3.select('body')
            .selectAll('h2')
            .data(dataset)
            .enter()
            .append('h2')
            .text('New Title')
        // Add your code above this line
        </script>
    </body>
    ```
1. [Work with Dynamic Data in D3](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/work-with-dynamic-data-in-d3)
    ```html
    <body>
    <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        d3.select("body").selectAll("h2")
            .data(dataset)
            .enter()
            .append("h2")
            // Add your code below this line
            .text((d) => d + ' USD');
            // Add your code above this line
    </script>
    </body>
    ```
1. [Add Inline Styling to Elements](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/add-inline-styling-to-elements)
    ```html
    <body>
        <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        d3.select("body").selectAll("h2")
            .data(dataset)
            .enter()
            .append("h2")
            .text((d) => (d + " USD"))
            // Add your code below this line
            .style('font-family', 'verdana');
            // Add your code above this line
        </script>
    </body>
    ```
1. [Change Styles Based on Data](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/change-styles-based-on-data)
    ```html
    <body>
        <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        d3.select("body").selectAll("h2")
            .data(dataset)
            .enter()
            .append("h2")
            .text((d) => (d + " USD"))
            // Add your code below this line
            .style('color', (d) => {
                if (d < 20) {
                    return 'red'
                }
                return 'green';
            });
            // Add your code above this line
        </script>
    </body>
    ```
1. [Add Classes with D3](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/add-classes-with-d3)
    ```html
    <style>
    .bar {
        width: 25px;
        height: 100px;
        display: inline-block;
        background-color: blue;
    }
    </style>
    <body>
        <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        d3.select("body").selectAll("div")
            .data(dataset)
            .enter()
            .append("div")
            // Add your code below this line
            .attr('class', 'bar');
            // Add your code above this line
        </script>
    </body>
    ```
1. [Update the Height of an Element Dynamically](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/update-the-height-of-an-element-dynamically)
    ```html
    <style>
    .bar {
        width: 25px;
        height: 100px;
        display: inline-block;
        background-color: blue;
    }
    </style>
    <body>
        <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        d3.select("body").selectAll("div")
            .data(dataset)
            .enter()
            .append("div")
            .attr("class", "bar")
            // Add your code below this line
            .style('height', (d) => { return d + 'px'});
            // Add your code above this line
        </script>
    </body>
    ```
1. [Change the Presentation of a Bar Chart](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/change-the-presentation-of-a-bar-chart)
    ```html
    <style>
        .bar {
            width: 25px;
            height: 100px;
            /* Add your code below this line */
            margin: 2px;
            /* Add your code above this line */
            display: inline-block;
            background-color: blue;
        }
    </style>
    <body>
        <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        d3.select("body").selectAll("div")
            .data(dataset)
            .enter()
            .append("div")
            .attr("class", "bar")
            // Add your code below this line
            .style("height", (d) => (10 * d + "px"))
            // Add your code above this line
        </script>
    </body>
    ```
1. [Learn About SVG in D3](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/learn-about-svg-in-d3)
    ```html
    <style>
    svg {
        background-color: pink;
    }
    </style>
    <body>
        <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        const w = 500;
        const h = 100;

        const svg = d3.select("body")
                        // Add your code below this line
                        .append('svg')
                        .attr('width', w)
                        .attr('height', h);
                        // Add your code above this line
        </script>
    </body>
    ```
1. [Display Shapes with SVG](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/display-shapes-with-svg)
    ```html
    <body>
        <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        const w = 500;
        const h = 100;

        const svg = d3.select("body")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h)
                        // Add your code below this line
                        .append('rect')
                        .attr('x', 0)
                        .attr('y', 0)
                        .attr('width', 25)
                        .attr('height', 100);
                        // Add your code above this line
        </script>
    </body>
    ```
1. [Create a Bar for Each Data Point in the Set](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/create-a-bar-for-each-data-point-in-the-set)
    ```html
    <body>
        <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        const w = 500;
        const h = 100;

        const svg = d3.select("body")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

        svg.selectAll("rect")
            // Add your code below this line
            .data(dataset)
            .enter()
            .append('rect')
            // Add your code above this line
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", 25)
            .attr("height", 100);
        </script>
    </body>
    ```
1. [Dynamically Set the Coordinates for Each Bar](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/dynamically-set-the-coordinates-for-each-bar)
    ```html
    <body>
        <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        const w = 500;
        const h = 100;

        const svg = d3.select("body")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

        svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("x", (d, i) => {
                // Add your code below this line
                return i * 30;
                // Add your code above this line
            })
            .attr("y", 0)
            .attr("width", 25)
            .attr("height", 100);
        </script>
    </body>
    ```
1. [Dynamically Change the Height of Each Bar](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/dynamically-change-the-height-of-each-bar)
    ```html
    <body>
        <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        const w = 500;
        const h = 100;

        const svg = d3.select("body")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

        svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 30)
            .attr("y", 0)
            .attr("width", 25)
            .attr("height", (d, i) => {
            // Add your code below this line
                return d *3;
            // Add your code above this line
            });
        </script>
    </body>
    ```
1. [Invert SVG Elements](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/invert-svg-elements)
    ```html
    <body>
        <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        const w = 500;
        const h = 100;

        const svg = d3.select("body")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

        svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 30)
            .attr("y", (d, i) => {
            // Add your code below this line
            return h - d * 3;
            // Add your code above this line
            })
            .attr("width", 25)
            .attr("height", (d, i) => 3 * d);
        </script>
    </body>
    ```
1. [Change the Color of an SVG Element](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/change-the-color-of-an-svg-element)
    ```html
    <body>
        <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        const w = 500;
        const h = 100;

        const svg = d3.select("body")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

        svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 30)
            .attr("y", (d, i) => h - 3 * d)
            .attr("width", 25)
            .attr("height", (d, i) => 3 * d)
            // Add your code below this line
            .attr('fill', 'navy')
            // Add your code above this line
        </script>
    </body>
    ```
1. [Add Labels to D3 Elements](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/add-labels-to-d3-elements)
    ```html
    <body>
    <script>
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

        const w = 500;
        const h = 100;

        const svg = d3.select("body")
                    .append("svg")
                    .attr("width", w)
                    .attr("height", h);

        svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 30)
        .attr("y", (d, i) => h - 3 * d)
        .attr("width", 25)
        .attr("height", (d, i) => 3 * d)
        .attr("fill", "navy");

        svg.selectAll("text")
        .data(dataset)
        .enter()
        // Add your code below this line
        .append('text')
        .attr("x", (d, i) => i * 30)
        .attr("y", (d, i) => h - 3 * d - 3)
        .text((d) => d)
        // Add your code above this line
    </script>
    <body>
    ```
1. [Style D3 Labels](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3/style-d3-labels)
    ```html
    <body>
        <script>
            const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

            const w = 500;
            const h = 100;

            const svg = d3.select("body")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 30)
            .attr("y", (d, i) => h - 3 * d)
            .attr("width", 25)
            .attr("height", (d, i) => d * 3)
            .attr("fill", "navy");

            svg.selectAll("text")
            .data(dataset)
            .enter()
            .append("text")
            .text((d) => d)
            .attr("x", (d, i) => i * 30)
            .attr("y", (d, i) => h - (3 * d) - 3)
            // Add your code below this line
            .style('font-size', '25px')
            .attr('fill', 'red');
            // Add your code above this line
        </script>
    </body>
    ```
1. [Add a Hover Effect to a D3 Element]()
    ```html
    ```
1. [Add a Tooltip to a D3 Element]()
    ```html
    ```
1. [Create a Scatterplot with SVG Circles]()
    ```html
    ```
1. [Add Attributes to the Circle Elements]()
    ```html
    ```
1. [Add Labels to Scatter Plot Circles]()
    ```html
    ```
1. [Create a Linear Scale with D3]()
    ```html
    ```
1. [Set a Domain and a Range on a Scale]()
    ```html
    ```
1. [Use the d3.max and d3.min Functions to Find Minimum and Maximum Values in a Dataset]()
    ```html
    ```
1. [Use Dynamic Scales]()
    ```html
    ```
1. [Use a Pre-Defined Scale to Place Elements]()
    ```html
    ```
1. [Add Axes to a Visualization]()
    ```html
    ```
## [JSON APIs and Ajax]()