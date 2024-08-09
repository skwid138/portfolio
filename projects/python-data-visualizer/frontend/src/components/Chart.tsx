"use client";

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface ChartData {
  labels: string[];
  values: number[];
}

interface ChartProps {
  data: ChartData;
}

const Chart: React.FC<ChartProps> = ({ data }) => {
  const chartRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (data.labels.length && data.values.length) {
      const svg = d3.select(chartRef.current)
        .attr('width', 500)
        .attr('height', 300);

      svg.selectAll("*").remove(); // Clear previous chart content

      const xScale = d3.scaleBand()
        .domain(data.labels)
        .range([0, 500])
        .padding(0.1);

      const yScale = d3.scaleLinear()
        .domain([0, d3.max(data.values) || 0])
        .range([300, 0]);

      svg.selectAll('.bar')
        .data(data.values)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', (d, i) => xScale(data.labels[i])!)
        .attr('y', d => yScale(d))
        .attr('width', xScale.bandwidth())
        .attr('height', d => 300 - yScale(d))
        .attr('fill', 'steelblue');

      svg.append('g')
        .attr('transform', 'translate(0,300)')
        .call(d3.axisBottom(xScale));

      svg.append('g')
        .call(d3.axisLeft(yScale));
    }
  }, [data]);

  return <svg ref={chartRef}></svg>;
};

export default Chart;