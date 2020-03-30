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
1. [Change Styles Based on Data]()
    ```html
    ```
1. [Add Classes with D3]()
    ```html
    ```
1. [Update the Height of an Element Dynamically]()
    ```html
    ```
1. [Change the Presentation of a Bar Chart]()
    ```html
    ```
1. [Learn About SVG in D3]()
    ```html
    ```
1. [Display Shapes with SVG]()
    ```html
    ```
1. [Create a Bar for Each Data Point in the Set]()
    ```html
    ```
1. [Dynamically Set the Coordinates for Each Bar]()
    ```html
    ```
1. [Dynamically Change the Height of Each Bar]()
    ```html
    ```
1. [Invert SVG Elements]()
    ```html
    ```
1. [Change the Color of an SVG Element]()
    ```html
    ```
1. [Add Labels to D3 Elements]()
    ```html
    ```
1. [Style D3 Labels]()
    ```html
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