import * as d3 from 'd3'

var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const size = 400

var yScale = d3.scaleLinear()
               .domain([0, 10])
               .range([0, size])

d3.select('svg')
  .selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
    .attr('width', size / 10)
    .attr('height', d => yScale(d))
    .attr('x', (d, i) => i * size / 10 )
    .attr('y', d => size - yScale(d))
    .style('fill', 'red')
    .style('stroke', 'black')