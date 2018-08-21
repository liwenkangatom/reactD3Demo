import React, {Component} from 'react'
import * as d3 from 'd3'
import PropTypes from 'prop-types'

function getnum(strpx) {
  return parseInt(strpx.substring(0, strpx.length-2), 10)
}
var d3Chart = {}
d3Chart.create = function(el, props, state) {
  var svg = d3.select(el).append('svg')
      .attr('class', 'd3')
      .attr('width', props.width)
      .attr('height', props.height)
      .attr('hahah', 24)

  svg.append('g')
      .attr('class', 'd3-points')

  this.update(el, state)
};
d3Chart.update = function(el, state) {
  // Re-compute the scales, and render the data points
  var scales = this._scales(el, state.domain);
  this._drawPoints(el, scales, state.data);
};
d3Chart.destroy = function(el) {
  // Any clean-up would go here
  // in this example there is nothing to do
};

d3Chart._drawPoints = function(el, scales, data) {
  var g = d3.select(el).select('.d3').select('.d3-points')
  var point = g.selectAll('.d3-point') 
    .data(data)
  point.enter().append('circle')
    .attr('class', 'd3-point')
.attr('cx', d => scales.x(d.x))
    .attr('cy', d => scales.y(d.y))
    .attr('r', d => scales.z(d.z))
  // console.log(point)
}
d3Chart._scales = function(el, domain) {
  let svg = d3.select(el),
  margin = {top: 20, right: 20, bottom:50, left: 50},
  areaWidth = getnum(svg.style('width')) - margin.left - margin.right
  return {
    y: d3.scaleLinear().domain(domain.y).range([0, areaWidth]),
    x: d3.scaleLinear().domain(domain.x).range([0, areaWidth]),
    z: d3.scaleLinear().domain(domain.z).range([0, areaWidth])
  }
}
class Chart extends Component{
  static propTypes = {
    data: PropTypes.array,
    domain: PropTypes.object
  }
  componentDidMount() {
    d3Chart.create(this._rootNode, {
      width: '300px',
      height: '300px'
    }, this.getChartState())
  }
  componentDidUpdate() {
    d3Chart.update(this._rootNode, this.getChartState())
  }
  getChartState() {
    return {
      data: this.props.data,
      domain: this.props.domain
    }
  }
  componentWillUnmount() {
    d3Chart.destroy(this._rootNode)
  }
  _setRef(componentNode) {
    this._rootNode = componentNode
  }

  render() {
    return (
      <div className='chart' ref={(node) => this._setRef(node)}></div>
    )
  }
}
// let svg = d3.select('svg'),
//   margin = {top: 20, right: 20, bottom:50, left: 50},
//   areaWidth = svg.attr('width') - margin.left - margin.right,
//   g = svg.append('g')
//   .attr('transform', `translate(${margin.left},${margin.top}`)
//   .attr('width', areaWidth)
//   .attr('height', areaHeight)
// // 定义比例尺，线性定量标度 
// let xScale = d3.scaleLinear()
//   .domain([0, 22])
//   .range([0, areaWidth])
let sampleData = [
  {id: 'weifkji', x: 7, y: 41, z: 6},
  {id: 'adasdawe', x: 11, y: 45, z: 9}
]
class D3barexsimple extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: sampleData,
      domain: {x: [0, 30], y: [0, 100], z: [0, 20]}
    }
  }
  render() {
    return (
      <Chart data = {this.state.data} domain = {this.state.domain}/>
      )
  }

} 
export default D3barexsimple 