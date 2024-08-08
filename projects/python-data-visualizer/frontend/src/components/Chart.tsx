"use client";

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface ChartProps {
  data: {
    labels: string[];
    values: number[];
  };
}

const Chart: React.FC<ChartProps> = ({ data }) => {
  const chartRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = d3.select(chartRef.current)
      .attr('width', 500)
      .attr('height', 300);

    // Add D3.js chart creation logic here

  }, [data]);

  return <svg ref={chartRef}></svg>;
};

export default Chart;
