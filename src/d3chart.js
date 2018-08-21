import * as d3 from 'd3'

let d3Chart = {}

d3Chart.create = function(el, props, state) {
    // create svg
    let svg = d3.select(el).append('svg')
        .attr('class', 'd3')
        .attr('height', props.height)
        .attr('width', props.width)
    svg.append('g')
        .attr('class', 'd3-points')
    this.update(el, state)
}
d3Chart.update = function(el, state) {
    // Re-compute the scales, and render the data points
    let scales = this._scales(el, state.domin)
    this._drowPoints(el, scales, state.data)
}
d3Chart.destroy = function(el) {

}
d3Chart._drowPoints = function(el, scales, data) {
    console.log('jjijjkjij')   
    d3.select("body").selectAll("div")
    .data([4, 8, 15, 16, 23, 42])
  .enter().append("div")
    .text(function(d) { return d; }); 
    // let g = d3.select(el).selectAll('.d3-points')
    // let point = g.selectAll('.d3-point')
    //     .data(data)
    // // ENTER
    // point.enter().append('circle')
    //     .attr('class', 'd3-point')
    // // ENTER & UPDATE
    // point.attr('cx', d => scales.x(d.x))
    //     .attr('cy', d => scales.y(d.y))
    //     .attr('r', d => scales.z(d.z))
    // // EXIT
    // point.exit()
    //     .remove()
}
export default d3Chart