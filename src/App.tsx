import * as React from 'react'
import { Component } from 'react'
import * as d3 from 'd3'

interface Props {
  width: number
  height: number
  data: {
    nodes: {name: string, group: number}[]
    links: {source: number, target: number, value: number}[]
  }
}

interface Refs {
  mountPoint?: HTMLDivElement
}

class App extends Component<Props, {}> {
  ctrls: Refs = {}

  componentDidMount() {
    const { width, height, data } = this.props

    const force = d3.forceSimulation()
      .force('charge', d3.forceManyBody().strength(-120))
      .force('link', d3.forceLink(data.links).distance(50))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .nodes(data.nodes)

    const svg = d3.select(this.ctrls.mountPoint)
                  .append('svg')
                  .attr('width', width)
                  .attr('height', height)

    const link = svg.selectAll('line')
                    .data(data.links)
                    .enter()
                    .append('line')
                    .style('stroke', '#999999')
                    .style('stroke-opacity', 0.6)
                    .style('stroke-width', d => Math.sqrt(d.value))

    const color = d3.scaleOrdinal(d3.schemeCategory20)
    const node = svg.selectAll('circle')
                    .data(data.nodes)
                    .enter()
                    .append('circle')
                    .attr('r', 5)
                    .style('stroke', '#FFFFFF')
                    .style('stroke-width', 1.5)
                    .style('fill', (d: any) => color(d.group))

    force.on('tick', () => {
      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y)

      node
        .attr('cx', (d: any) => d.x)
        .attr('cy', (d: any) => d.y)
    })
  }

  render() {
    const { width, height } = this.props
    const style = {
      width,
      height,
      backgroundColor: '#333'
    }
    return <div style={style} ref={mountPoint => this.ctrls.mountPoint = mountPoint} />
  }
}

export default App
