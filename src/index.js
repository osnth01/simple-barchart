import * as d3 from 'd3'

function generateRandomNumber(min, max) {
  return Math.floor((Math.random() * max) + min)
}

var data = []

for (var i = 0; i < 10; i++) {
  data.push(generateRandomNumber(1, 10))
}

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