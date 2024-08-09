"use client";

import React, { useState, useEffect } from 'react';
import Chart from '../components/Chart';

interface Data {
  labels: string[];
  values: number[];
}

const Home: React.FC = () => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log('Fetching data...');
      try {
        const response = await fetch('/api/month-data/');
        console.log('Response received:', response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log('Data fetched:', result);
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Data Visualization Dashboard</h1>
      {data ? <Chart data={data} /> : <p>Loading data...</p>}
    </div>
  );
};

export default Home;
