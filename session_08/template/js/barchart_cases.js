
/*****************************************/
/*   DRAW BAR CHART - ALREADY COMPLETE   */
/*****************************************/

// CHART AREA
let margin_middle = {top: 40, right: 20, bottom: 40, left: 90},
    width_middle = document.querySelector('#svg_container_middle').offsetWidth - margin_middle.left - margin_middle.right,
    height_middle = 400 - margin_middle.top - margin_middle.bottom;


let svg_middle = d3.select("#svg_container_middle").append("svg")
    .attr("width", width_middle + margin_middle.left + margin_middle.right)
    .attr("height", height_middle + margin_middle.top + margin_middle.bottom)
    .append("g")
    .attr("transform", "translate(" + margin_middle.left + "," + margin_middle.top + ")");


// AXIS

let x_middle = d3.scaleBand()
    .range([0, width_middle])
    .paddingInner(0.1);

let y_middle = d3.scaleLinear()
    .range([height_middle, 0]);

let xAxis_middle = d3.axisBottom()
    .scale(x_middle)

let yAxis_middle = d3.axisLeft()
    .scale(y_middle);

let xAxisGroup_middle = svg_middle.append("g")
    .attr("class", "x-axis axis");

let yAxisGroup_middle = svg_middle.append("g")
    .attr("class", "y-axis axis");

// tooltip
let tooltip_middle = d3.select("body").append('div')
    .attr('class', "tooltip")
    .attr('id', 'barchartMiddleTooltip')


let clicked = false
function renderBarChartMiddle(data) {

    x_middle.domain(data.map( d => d.state));
    y_middle.domain([0, d3.max(data, d => d.absCases)]);

    // ---- DRAW BARS ----
    let bars = svg_middle.selectAll(".bar")
        .remove()
        .exit()
        .data(data)

    bars.enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", d => x_middle(d.state))
        .attr("y", d => y_middle(d.absCases))
        .attr("height", d => (height_middle - y_middle(d.absCases)))
        .attr("width", x_middle.bandwidth())
        .attr("fill", '#136D70')
        .attr('stroke', '#093637')
        .on('mouseover', function(event, d){
            clicked = false

            // mouseover effect
            d3.select(this).attr('fill', '#199599')

            // update tooltip
            tooltip_middle
                .style("opacity", 1)
                .style("left", event.pageX + 20 + "px")
                .style("top", event.pageY + "px")
                .html(`
                        <div style="border: thin solid grey; border-radius: 5px; background: lightgrey; padding: 20px">
                            <h3>${d.state}<h3>
                            <h4> Population: ${d.population}</h4>
                            <h4> Cases (absolute): ${d.absCases}</h4>
                            <h4> Deaths (absolute): ${d.absDeaths}</h4>
                            <h4> Cases (relative): ${d.relCases.toFixed(2)}%</h4>
                            <h4> Deaths (relative): ${d.relDeaths.toFixed(2)}%</h4>
                        </div>`);
        })
        .on('mouseout', function (event, d) {
            if (clicked == false) {
                d3.select(this).attr('fill', '#136D70')

                // hide tooltip
                tooltip_middle
                    .style("opacity", 0)
                    .style("left", 0+ "px")
                    .style("top", 0+ "px")
            }

        })

        .on('click', function(event, d){
            clicked = true

            // mouseover effect
            d3.select(this).attr('fill', '#0c4a4c')

            // update tooltip
            tooltip_middle
                .style("opacity", 1)
                .style("left", event.pageX + 20 + "px")
                .style("top", event.pageY + "px")
                .html(`
                        <div style="border: thin solid grey; border-radius: 5px; background: lightgrey; padding: 20px">
                            <h3>${d.state}<h3>
                            <h4> Cases (absolute): ${d.absCases}</h4>
                        </div>`);
        })

    // ---- DRAW AXIS	----
    xAxisGroup = svg_middle.select(".x-axis")
        .attr("transform", "translate(0," + height_middle + ")")
        .call(xAxis_middle);

    yAxisGroup = svg_middle.select(".y-axis")
        .call(yAxis_middle);

}
