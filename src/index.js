import * as d3 from 'd3'

function generateRandomNumber(min, max) {
  return Math.floor((Math.random() * max) + min)
}

function generateRandomData(min, max) {
  var data = []

  for (var i = 0; i < 10; i++) {
    data.push(Math.floor((Math.random() * max) + min))
  }

  return data
}

function drawGraph() {
  const size = 400
  var data = generateRandomData(1, 10)

  var yScale = d3.scaleLinear()
    .domain([0, 10])
    .range([0, size])

  var rects = d3.select('#chart')
    .selectAll('rect')
    .data(data)

  rects
    .enter()
    .append('rect')
    .merge(rects)
      .attr('width', size / 10)
      .attr('height', d => yScale(d))
      .attr('x', (d, i) => i * size / 10)
      .attr('y', d => size - yScale(d))
      .style('fill', 'red')
      .style('stroke', 'black')

  rects.exit().remove()

}

drawGraph()

document.getElementById('update-button').onclick = drawGraph